"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type ChladniCanvasProps = {
  className?: string;
  variant?: "card" | "hero";
};

type Mode = {
  m: number;
  n: number;
  a: number;
  px: number;
  py: number;
  cos: number;
  sin: number;
};

const CARD_CONFIG = {
  particleCount: 50000,
  gridSize: 256,
  settleStrength: 2,
  jitter: 0.15,
  drag: 0.88,
  speedLimit: 2.0,
  fieldScale: 1.0,
  particleAlpha: 0.6,
  particleSize: 1.0,
};

const HERO_CONFIG = {
  particleCount: 5200,
  gridSize: 256,
  settleStrength: 4.8,
  jitter: 0.05,
  drag: 0.89,
  speedLimit: 2.0,
  fieldScale: 1.0,
  particleAlpha: 0.6,
  particleSize: 1.0,
};

const BASE_CONFIG = {
  modeCount: 2,
  mRange: { min: 8, max: 8 },
  nRange: { min: 6, max: 6 },
  phaseJitter: 1,
  waveMix: 0.7,
};

const PRIMARY_COLOR = "182, 129, 56";
const SECONDARY_COLOR = "255, 255, 255";

const smoothstep = (t: number) => t * t * (3 - 2 * t);
const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

function readCanvasPalette() {
  if (typeof window === "undefined") {
    return {
      overlay: "rgba(5, 5, 6, 0.18)",
      primary: PRIMARY_COLOR,
      secondary: SECONDARY_COLOR,
    };
  }

  const styles = window.getComputedStyle(document.documentElement);
  const readVar = (name: string, fallback: string) =>
    styles.getPropertyValue(name).trim() || fallback;

  return {
    overlay: readVar("--particle-overlay", "rgba(5, 5, 6, 0.18)"),
    primary: readVar("--particle-primary", PRIMARY_COLOR),
    secondary: readVar("--particle-secondary", SECONDARY_COLOR),
  };
}

const WAVE_FUNCTIONS = {
  CurvedStripes: (cx: number, cy: number, mode: Mode) => {
    const rx = cx * mode.cos - cy * mode.sin;
    const ry = cx * mode.sin + cy * mode.cos;
    const warpedX = rx + 0.45 * Math.sin(mode.n * Math.PI * ry + mode.py);
    return Math.sin(mode.m * Math.PI * warpedX + mode.px);
  },
  Spiral: (cx: number, cy: number, mode: Mode) => {
    const rx = cx * mode.cos - cy * mode.sin;
    const ry = cx * mode.sin + cy * mode.cos;
    const r = Math.sqrt(rx * rx + ry * ry);
    const theta = Math.atan2(ry, rx);
    return Math.sin(mode.m * theta + mode.n * Math.PI * r + mode.px + mode.py);
  },
};

function createModes() {
  const modes: Mode[] = [];

  for (let i = 0; i < BASE_CONFIG.modeCount; i += 1) {
    const m = BASE_CONFIG.mRange.min;
    const n = BASE_CONFIG.nRange.min;

    modes.push({
      m,
      n,
      a: Math.exp(-i * 0.35),
      px: (Math.random() * 2 - 1) * Math.PI * BASE_CONFIG.phaseJitter,
      py: (Math.random() * 2 - 1) * Math.PI * BASE_CONFIG.phaseJitter,
      cos: 1,
      sin: 0,
    });
  }

  const sum = modes.reduce((acc, mode) => acc + Math.abs(mode.a), 0);
  if (sum > 0) {
    for (const mode of modes) mode.a /= sum;
  }

  return modes;
}

export function ChladniCanvas({
  className,
  variant = "card",
}: ChladniCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const config = variant === "hero" ? HERO_CONFIG : CARD_CONFIG;
    const modes = createModes();
    const gridSize = config.gridSize;
    const size = gridSize * gridSize;
    const energy = new Float32Array(size);
    const gradX = new Float32Array(size);
    const gradY = new Float32Array(size);
    const positions = new Float32Array(config.particleCount * 2);
    const velocities = new Float32Array(config.particleCount * 2);
    const palette = { current: readCanvasPalette() };

    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const randomPointInShape = () => {
      const rangeY = 1;
      const rangeX = rangeY * (width / Math.max(height, 1));
      return [
        (Math.random() - 0.5) * 2 * rangeX,
        (Math.random() - 0.5) * 2 * rangeY,
      ] as const;
    };

    const rebuildField = () => {
      const maxR = Math.SQRT1_2 * config.fieldScale;
      const baseBias = BASE_CONFIG.waveMix - 0.5;

      for (let y = 0; y < gridSize; y += 1) {
        for (let x = 0; x < gridSize; x += 1) {
          const tx = x / (gridSize - 1);
          const ty = y / (gridSize - 1);
          const cx = (tx - 0.5) * config.fieldScale;
          const cy = (ty - 0.5) * config.fieldScale;
          const idx = y * gridSize + x;
          const r = Math.sqrt(cx * cx + cy * cy);
          const rn = clamp(r / maxR, 0, 1);
          const mixed = rn + baseBias;
          const spatialMix = smoothstep(clamp(mixed, 0, 1));

          let phi = 0;
          for (const mode of modes) {
            const wa = Math.tanh(WAVE_FUNCTIONS.CurvedStripes(cx, cy, mode));
            const wb = Math.tanh(WAVE_FUNCTIONS.Spiral(cx, cy, mode));
            phi += mode.a * (wa * (1 - spatialMix) + wb * spatialMix);
          }

          energy[idx] = phi * phi;
        }
      }

      const maxDim = Math.max(width / Math.max(height, 1), 1);
      const cellSize = (maxDim * 2) / (gridSize - 1);

      for (let y = 0; y < gridSize; y += 1) {
        const y0 = Math.max(0, y - 1);
        const y1 = Math.min(gridSize - 1, y + 1);

        for (let x = 0; x < gridSize; x += 1) {
          const x0 = Math.max(0, x - 1);
          const x1 = Math.min(gridSize - 1, x + 1);
          const idx = y * gridSize + x;
          const eL = energy[y * gridSize + x0];
          const eR = energy[y * gridSize + x1];
          const eU = energy[y0 * gridSize + x];
          const eD = energy[y1 * gridSize + x];

          gradX[idx] = (eR - eL) / (2 * cellSize);
          gradY[idx] = (eD - eU) / (2 * cellSize);
        }
      }
    };

    const seedParticles = () => {
      for (let i = 0; i < config.particleCount; i += 1) {
        const [x, y] = randomPointInShape();
        positions[i * 2] = x;
        positions[i * 2 + 1] = y;
        velocities[i * 2] = 0;
        velocities[i * 2 + 1] = 0;
      }
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(1, Math.floor(bounds.width));
      height = Math.max(1, Math.floor(bounds.height));

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      rebuildField();
      seedParticles();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = palette.current.overlay;
      context.fillRect(0, 0, width, height);

      const aspect = width / Math.max(height, 1);
      const rangeY = 1;
      const rangeX = rangeY * aspect;
      const gridScale = (gridSize - 1) / (Math.max(rangeX, rangeY) * 2);

      for (let i = 0; i < config.particleCount; i += 1) {
        const i2 = i * 2;
        let x = positions[i2];
        let y = positions[i2 + 1];
        let vx = velocities[i2];
        let vy = velocities[i2 + 1];

        if (
          x < -rangeX ||
          x > rangeX ||
          y < -rangeY ||
          y > rangeY ||
          Math.random() < 0.002
        ) {
          const respawn = randomPointInShape();
          x = respawn[0];
          y = respawn[1];
          vx = 0;
          vy = 0;
        }

        let gxPos = (x + Math.max(rangeX, rangeY)) * gridScale;
        let gyPos = (y + Math.max(rangeX, rangeY)) * gridScale;

        gxPos = clamp(gxPos, 0, gridSize - 1.001);
        gyPos = clamp(gyPos, 0, gridSize - 1.001);

        const gX0 = Math.floor(gxPos);
        const gY0 = Math.floor(gyPos);
        const tx = gxPos - gX0;
        const ty = gyPos - gY0;
        const idx00 = gY0 * gridSize + gX0;
        const idx10 = idx00 + 1;
        const idx01 = idx00 + gridSize;
        const idx11 = idx01 + 1;

        const gxVal =
          (gradX[idx00] * (1 - tx) + gradX[idx10] * tx) * (1 - ty) +
          (gradX[idx01] * (1 - tx) + gradX[idx11] * tx) * ty;
        const gyVal =
          (gradY[idx00] * (1 - tx) + gradY[idx10] * tx) * (1 - ty) +
          (gradY[idx01] * (1 - tx) + gradY[idx11] * tx) * ty;

        vx -= gxVal * config.settleStrength;
        vy -= gyVal * config.settleStrength;
        vx += (Math.random() - 0.5) * config.jitter;
        vy += (Math.random() - 0.5) * config.jitter;
        vx *= config.drag;
        vy *= config.drag;

        const speed = Math.sqrt(vx * vx + vy * vy);
        if (speed > config.speedLimit) {
          const scale = config.speedLimit / speed;
          vx *= scale;
          vy *= scale;
        }

        x += vx * 0.006;
        y += vy * 0.006;

        positions[i2] = x;
        positions[i2 + 1] = y;
        velocities[i2] = vx;
        velocities[i2 + 1] = vy;

        const px = ((x + rangeX) / (rangeX * 2)) * width;
        const py = ((y + rangeY) / (rangeY * 2)) * height;
        const tint = i % 5 === 0 ? palette.current.secondary : palette.current.primary;

        context.fillStyle = `rgba(${tint}, ${config.particleAlpha})`;
        context.beginPath();
        context.arc(px, py, config.particleSize, 0, Math.PI * 2);
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(() => resize());

    observer.observe(canvas);
    resize();
    draw();

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [variant]);

  return (
    <div
      className={cn(
        "media-frame relative overflow-hidden rounded-md",
        className,
      )}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
