// Adapted from Halftone Fun. The portfolio uses the unprofiled ink colors.
import { firstGlyph } from "./glyph";
import { bezierOutline, defaultBezier, type BezierCurve } from "./bezier";
import { applyPhotoTones } from "./photo-tone";

export type ScreenMode = 'mono' | 'cmyk' | 'duotone' | 'source';
export type BlendMode = 'source-over' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'difference' | 'soft-light' | 'hard-light' | 'color-dodge' | 'color-burn' | 'exclusion';
export type BaseDotShape = 'circle' | 'line' | 'glyph' | 'square' | 'cross' | 'chevron' | 'brush' | 'svg' | 'bezier';
export type BrushType = 'bristle' | 'dry' | 'marker' | 'rake' | 'conte';
export type MixedDotShape = BaseDotShape | 'none';
export type DotShape = BaseDotShape | 'mixed';
export type MixedShapeSlot = {
  shape: MixedDotShape;
  circleStretch: number;
  lineLength: number;
  distortion: number;
  glyph: string;
};
export type ChannelSettings = {
  color: string;
  alpha: number;
};
export type SvgStamp = { paths: string[]; viewBox: [number, number, number, number] };

export type Settings = {
  screenRotation: number;
  plateSeparation: number;
  spacing: number;
  dotScale: number;
  minAngle: number;
  maxAngle: number;
  dotDistortion: number;
  contrast: number;
  saturation: number;
  gamma: number;
  shadows: number;
  midtones: number;
  highlights: number;
  threshold: number;
  dotOpacity: number;
  matThickness: number;
  imageOffsetX: number;
  imageOffsetY: number;
  mode: ScreenMode;
  colorProfile?: string;
  shape: DotShape;
  circleStretch: number;
  squareStretch: number;
  squareRoundedCorners: boolean;
  squareCornerRadius: number;
  lineSquareCap: boolean;
  crossThickness: number;
  secondShape: (ShapeSettings & Partial<Pick<Settings, "screenRotation" | "plateSeparation" | "contrast" | "saturation" | "gamma" | "shadows" | "midtones" | "highlights" | "threshold" | "grainAmount" | "grainSize">>) | null;
  mixRatio: number;
  animateMix: boolean;
  mixDuration: number;
  mixMode: 'uniform' | 'directional' | 'color';
  mixPattern: 'linear' | 'radial' | 'noise';
  mixCenterX: number;
  mixCenterY: number;
  mixRadialInward: boolean;
  mixSpatialSoftness: number;
  mixNoiseScale: number;
  mixFlowSpeed: number;
  mixNoiseSeed: number;
  mixColorA: string;
  mixColorB: string;
  mixSoftness: number;
  mixDirection: 'horizontal' | 'vertical' | 'diagonal' | 'custom';
  mixAngle: number;
  grainAmount: number;
  grainSize: number;
  pointillism: boolean;
  pointDensity: number;
  pointJitter: number;
  pointSizeVariation: number;
  printVariation: number;
  bezierCurve: BezierCurve;
  brushType: BrushType;
  lineLength: number;
  lineBend: number;
  mixedSlots: [MixedShapeSlot, MixedShapeSlot, MixedShapeSlot];
  glyph: string;
  monoColor: string;
  duotoneLight: string;
  duotoneDark: string;
  paperWarmth: number;
  channelBlend: BlendMode;
  cmykChannels: Record<'cyan' | 'magenta' | 'yellow' | 'black', ChannelSettings>;
  animateAngles: boolean;
  minAngleEnd: number;
  maxAngleEnd: number;
  svgStamp: SvgStamp | null;
};

export type ShapeSettings = Pick<Settings, 'shape' | 'spacing' | 'dotScale' | 'minAngle' | 'maxAngle' | 'dotDistortion' | 'dotOpacity' | 'circleStretch' | 'squareStretch' | 'squareRoundedCorners' | 'squareCornerRadius' | 'lineSquareCap' | 'crossThickness' | 'pointillism' | 'pointDensity' | 'pointJitter' | 'pointSizeVariation' | 'printVariation' | 'bezierCurve' | 'brushType' | 'lineLength' | 'lineBend' | 'mixedSlots' | 'glyph' | 'animateAngles' | 'minAngleEnd' | 'maxAngleEnd' | 'svgStamp' | 'mode' | 'monoColor' | 'duotoneLight' | 'duotoneDark' | 'channelBlend' | 'cmykChannels'>;

export function copyShape(settings: ShapeSettings): ShapeSettings {
  return structuredClone(Object.fromEntries(
    ['shape', 'spacing', 'dotScale', 'minAngle', 'maxAngle', 'dotDistortion', 'dotOpacity', 'circleStretch', 'squareStretch', 'squareRoundedCorners', 'squareCornerRadius', 'lineSquareCap', 'crossThickness', 'pointillism', 'pointDensity', 'pointJitter', 'pointSizeVariation', 'printVariation', 'bezierCurve', 'brushType', 'lineLength', 'lineBend', 'mixedSlots', 'glyph', 'animateAngles', 'minAngleEnd', 'maxAngleEnd', 'svgStamp', 'mode', 'monoColor', 'duotoneLight', 'duotoneDark', 'channelBlend', 'cmykChannels'].map(key => [key, settings[key as keyof ShapeSettings]]),
  )) as ShapeSettings;
}

type DrawingContext = CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;
type DrawingCanvas = HTMLCanvasElement | OffscreenCanvas;
export type InkChannel = 'mono' | 'cyan' | 'magenta' | 'yellow' | 'black' | 'duotoneLight' | 'duotoneDark' | 'source';

export function getInkPlates(settings: Settings): InkChannel[] {
  const channels = (mode: ScreenMode): InkChannel[] => mode === 'cmyk'
    ? ['cyan', 'magenta', 'yellow', 'black']
    : mode === 'duotone' ? ['duotoneLight', 'duotoneDark']
    : mode === 'mono' ? ['mono'] : ['source'];
  return [...new Set([...channels(settings.mode), ...(settings.secondShape ? channels(settings.secondShape.mode) : [])])];
}

export function getRenderSize(sourceWidth: number, sourceHeight: number, scale = 1, matThickness = 20) {
  const ratio = Math.min(1040 / sourceWidth, 1040 / sourceHeight, 1);
  const width = Math.max(1, Math.round(sourceWidth * ratio));
  const height = Math.max(1, Math.round(sourceHeight * ratio));
  const layout = getCanvasLayout(width, height, matThickness, 0, 0);
  return { width: Math.ceil(layout.outputWidth * scale / 2) * 2, height: Math.ceil(layout.outputHeight * scale / 2) * 2 };
}

function getCanvasLayout(width: number, height: number, matThickness: number, offsetX: number, offsetY: number) {
  // Scale padding with each canvas axis so increasing the frame keeps
  // the source aspect ratio instead of progressively pulling it toward square.
  const matX = Math.round(width * matThickness / 100);
  const matY = Math.round(height * matThickness / 100);
  return {
    outputWidth: width + matX * 2,
    outputHeight: height + matY * 2,
    imageOffsetX: matX + Math.round(matX * offsetX / 100),
    imageOffsetY: matY + Math.round(matY * offsetY / 100),
  };
}

export function createHalftoneRenderer() {
  const makeCanvas = (): DrawingCanvas => typeof document === 'undefined' ? new OffscreenCanvas(1, 1) : document.createElement('canvas');
  const sampleCanvas = makeCanvas();
  const sampleContext = sampleCanvas.getContext('2d', { willReadFrequently: true }) as DrawingContext;
  const paper = makeCanvas();
  const paperContext = paper.getContext('2d', { willReadFrequently: true }) as DrawingContext;
  const alphaMask = makeCanvas();
  const alphaContext = alphaMask.getContext('2d') as DrawingContext;
  let paperKey = '';
  const grain = makeCanvas();
  const grainContext = grain.getContext('2d') as DrawingContext;
  let grainKey = '';
  return (target: DrawingCanvas, source: CanvasImageSource, sourceWidth: number, sourceHeight: number, settings: Settings, exportScale = 1, animationProgress = 0, plate?: InkChannel) => {
      const sourceMax = 1040;
      const ratio = Math.min(sourceMax / sourceWidth, sourceMax / sourceHeight, 1);
      const width = Math.max(1, Math.round(sourceWidth * ratio));
      const height = Math.max(1, Math.round(sourceHeight * ratio));
      const { outputWidth, outputHeight, imageOffsetX, imageOffsetY } = getCanvasLayout(width, height, settings.matThickness, settings.imageOffsetX, settings.imageOffsetY);

      sampleCanvas.width = width;
      sampleCanvas.height = height;
      sampleContext.clearRect(0, 0, width, height);
      sampleContext.drawImage(source, 0, 0, width, height);
      const colorMixAt = settings.secondShape && settings.mixMode === 'color'
        ? createColorMixSampler(sampleContext.getImageData(0, 0, width, height).data, width, height, settings.mixColorA, settings.mixColorB, settings.mixSoftness)
        : undefined;
      const pixels = sampleContext.getImageData(0, 0, width, height).data;
      const secondPixels = settings.secondShape ? new Uint8ClampedArray(pixels) : pixels;
      applyPhotoTones(pixels, settings);
      if (settings.secondShape) {
        applyPhotoTones(secondPixels, { ...settings, ...settings.secondShape });
      }
      let hasTransparency = false;
      for (let index = 3; index < pixels.length; index += 4) {
        if (pixels[index] < 255) { hasTransparency = true; break; }
      }

      const context = target.getContext('2d') as DrawingContext | null;
      if (!context) return;

      target.width = Math.ceil(outputWidth * exportScale / 2) * 2;
      target.height = Math.ceil(outputHeight * exportScale / 2) * 2;
      context.setTransform(exportScale, 0, 0, exportScale, 0, 0);
      const nextPaperKey = [target.width, target.height, exportScale, settings.paperWarmth].join(':');
      if (paperKey !== nextPaperKey) {
        paper.width = target.width;
        paper.height = target.height;
        paperContext.fillStyle = getPaperColor(settings.paperWarmth);
        paperContext.fillRect(0, 0, paper.width, paper.height);
        paperKey = nextPaperKey;
      }
      context.setTransform(1, 0, 0, 1, 0, 0);
      if (!plate) context.drawImage(paper, 0, 0);
      context.setTransform(exportScale, 0, 0, exportScale, 0, 0);

      context.save();
      context.translate(imageOffsetX, imageOffsetY);
      const progress = settings.animateAngles ? animationProgress : 0;
      const renderSettings = {
        ...settings,
        minAngle: interpolateAngle(settings.minAngle, settings.minAngleEnd, progress),
        maxAngle: interpolateAngle(settings.maxAngle, settings.maxAngleEnd, progress),
        secondShape: settings.secondShape ? { ...settings.secondShape,
          minAngle: interpolateAngle(settings.secondShape.minAngle, settings.secondShape.minAngleEnd, settings.secondShape.animateAngles ? animationProgress : 0),
          maxAngle: interpolateAngle(settings.secondShape.maxAngle, settings.secondShape.maxAngleEnd, settings.secondShape.animateAngles ? animationProgress : 0),
        } : null,
      };
      const cycle = clamp(animationProgress) * 2;
      const returningToA = settings.animateMix && cycle >= 1;
      // Hold the current shape for half of each stage, then introduce the next.
      const stageProgress = cycle - (returningToA ? 1 : 0);
      const animatedMix = clamp((stageProgress - 0.5) * 2);
      const mix = renderSettings.secondShape ? (settings.animateMix ? animatedMix : clamp(settings.mixRatio / 100)) : 0;
      const blendField = settings.mixMode === 'directional'
        ? createSpatialMixSampler(width, height, settings, animationProgress)
        : colorMixAt;
      // Each half is a forward reveal: B over A, then A over B, using the same field.
      const shapeB = renderSettings.secondShape ? { ...renderSettings, ...renderSettings.secondShape } : renderSettings;
      const outgoing = returningToA ? shapeB : renderSettings;
      const incoming = returningToA ? renderSettings : shapeB;
      if (mix < 1) drawShape(context, returningToA ? secondPixels : pixels, width, height, outgoing, mix, false, blendField, plate);
      if (renderSettings.secondShape && mix > 0) {
        drawShape(context, returningToA ? pixels : secondPixels, width, height, incoming, mix, true, blendField, plate);
      }
      context.restore();

      context.setTransform(1, 0, 0, 1, 0, 0);
      if (hasTransparency) {
        // Respect the source alpha when applying the effect, then restore the
        // paper underneath transparent areas and soft edges.
        alphaMask.width = target.width;
        alphaMask.height = target.height;
        alphaContext.drawImage(source, imageOffsetX * exportScale, imageOffsetY * exportScale, width * exportScale, height * exportScale);
        context.globalCompositeOperation = 'destination-in';
        context.drawImage(alphaMask, 0, 0);
        context.globalCompositeOperation = 'destination-over';
        if (!plate) context.drawImage(paper, 0, 0);
        context.globalCompositeOperation = 'source-over';
      }
      // Stable logical-resolution grain preserves its character in scaled exports.
      const grainMix = returningToA ? 1 - mix : mix;
      const grainAmount = settings.grainAmount + ((settings.secondShape?.grainAmount ?? settings.grainAmount) - settings.grainAmount) * grainMix;
      const grainSize = settings.grainSize + ((settings.secondShape?.grainSize ?? settings.grainSize) - settings.grainSize) * grainMix;
      if (!plate && grainAmount > 0) {
        const size = Math.max(0.5, grainSize);
        const key = [outputWidth, outputHeight, size].join(':');
        if (grainKey !== key) {
          grain.width = Math.ceil(outputWidth / size);
          grain.height = Math.ceil(outputHeight / size);
          const texture = grainContext.createImageData(grain.width, grain.height);
          let seed = 9173;
          const random = () => {
            seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5;
            return (seed >>> 0) / 4294967296;
          };
          for (let i = 0; i < texture.data.length; i += 4) {
            const value = Math.round(128 + (random() + random() + random() - 1.5) * 100);
            texture.data[i] = texture.data[i + 1] = texture.data[i + 2] = value;
            texture.data[i + 3] = 255;
          }
          grainContext.putImageData(texture, 0, 0);
          grainKey = key;
        }
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.globalCompositeOperation = 'soft-light';
        context.globalAlpha = clamp(grainAmount / 100);
        context.imageSmoothingEnabled = true;
        context.drawImage(grain, 0, 0, target.width, target.height);
        // Carry subtle texture into solid ink and blank paper as well.
        context.globalCompositeOperation = 'source-over';
        context.globalAlpha = clamp(grainAmount / 100) * 0.16;
        context.drawImage(grain, 0, 0, target.width, target.height);
        context.restore();
      }
      context.setTransform(1, 0, 0, 1, 0, 0);
  };
}

function drawShape(context: DrawingContext, pixels: Uint8ClampedArray, width: number, height: number, shape: Settings, mix: number, second: boolean, colorMixAt?: (x: number, y: number) => number, selectedPlate?: InkChannel) {
      const dotAngle = 0;
      const screenAngle = shape.screenRotation ?? 0;
      if (shape.mode === 'cmyk') {
        (['cyan', 'magenta', 'yellow', 'black'] as const).forEach((channel) => {
          if (selectedPlate && selectedPlate !== channel) return;
          const plate = shape.cmykChannels[channel];
          const angles = { cyan: 15, magenta: 75, yellow: 0, black: 45 };
          drawSingleChannel(context, pixels, width, height, shape.spacing, shape, channel, plate.color, screenAngle + angles[channel], dotAngle, plate.alpha, mix, second, colorMixAt);
        });
      } else if (shape.mode === 'mono' && (!selectedPlate || selectedPlate === 'mono')) {
        drawSingleChannel(context, pixels, width, height, shape.spacing, shape, 'mono', shape.monoColor, screenAngle, dotAngle, 1, mix, second, colorMixAt);
      } else if (shape.mode === 'duotone') {
        if (!selectedPlate || selectedPlate === 'duotoneLight') drawSingleChannel(context, pixels, width, height, shape.spacing, shape, 'duotoneLight', shape.duotoneLight, screenAngle, dotAngle, 1, mix, second, colorMixAt);
        if (!selectedPlate || selectedPlate === 'duotoneDark') drawSingleChannel(context, pixels, width, height, shape.spacing, shape, 'duotoneDark', shape.duotoneDark, screenAngle + 45, dotAngle, 1, mix, second, colorMixAt);
      } else if (shape.mode === 'source' && (!selectedPlate || selectedPlate === 'source')) {
        drawSingleChannel(context, pixels, width, height, shape.spacing, shape, 'source', '#111111', screenAngle, dotAngle, 1, mix, second, colorMixAt);
      }
}

function drawSingleChannel(
  context: DrawingContext,
  pixels: Uint8ClampedArray,
  width: number,
  height: number,
  spacing: number,
  settings: Settings,
  channel: InkChannel,
  color: string,
  angle: number,
  dotAngle: number,
  opacity = 1,
  mixRatio = 0,
  second = false,
  colorMixAt?: (x: number, y: number) => number,
) {
  const pointillism = settings.shape === 'circle' && settings.pointillism;
  const cellSpacing = pointillism
    ? spacing / Math.sqrt(Math.max(0.1, settings.pointDensity / 100))
    : spacing;
  const radians = (angle * Math.PI) / 180;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  const centerX = width / 2;
  const centerY = height / 2;
  const diagonal = Math.hypot(width, height);
  const start = -diagonal / 2 - cellSpacing;
  const end = diagonal / 2 + cellSpacing;
  const offset = getChannelOffset(channel, settings.plateSeparation ?? 2);

  context.save();
  // Shift the printed plate without changing where its source tones are sampled.
  context.translate(offset.x, offset.y);
  context.globalCompositeOperation = settings.channelBlend;
  context.fillStyle = color;
  context.globalAlpha = opacity;

  for (let y = start; y <= end; y += cellSpacing) {
    for (let x = start; x <= end; x += cellSpacing) {
      const rotatedX = centerX + x * cos - y * sin;
      const rotatedY = centerY + x * sin + y * cos;
      if (rotatedX < 0 || rotatedX >= width || rotatedY < 0 || rotatedY >= height) continue;

      const selection = seededValue(rotatedX, rotatedY, channel, 973);
      const field = colorMixAt?.(rotatedX, rotatedY) ?? 0.5;
      const feather = settings.mixMode === 'directional' ? Math.max(0.01, settings.mixSpatialSoftness / 100) : 1;
      const localMix = settings.mixMode !== 'uniform' && settings.secondShape
        ? clamp((field + (1 + feather) * mixRatio - 1) / feather)
        : mixRatio;
      if (second ? selection >= localMix : selection < localMix) continue;
      const tone = getTone(pixels, width, height, rotatedX, rotatedY, cellSpacing, channel, settings);
      if (tone <= 0.015) continue;

      if (pointillism && seededValue(rotatedX, rotatedY, channel, 811) > tone) continue;

      let radius = pointillism
        ? cellSpacing * 0.32
        : getPrintedRadius(spacing, tone);
      if (pointillism) {
        const sizeNoise = (seededValue(rotatedX, rotatedY, channel, 812) - 0.5) * 2;
        radius *= Math.max(0.1, 1 + sizeNoise * settings.pointSizeVariation / 100);
      }
      if (radius < 0.35) continue;

      const noise = (seededValue(rotatedX, rotatedY, channel, 211) - 0.5) * settings.printVariation / 100;
      const jitterX = pointillism ? (seededValue(rotatedX, rotatedY, channel, 813) - 0.5) * cellSpacing * settings.pointJitter / 100 : 0;
      const jitterY = pointillism ? (seededValue(rotatedX, rotatedY, channel, 814) - 0.5) * cellSpacing * settings.pointJitter / 100 : 0;
      let colorSampleX = rotatedX;
      let colorSampleY = rotatedY;
      if (pointillism && channel === 'source' && settings.printVariation > 0) {
        // Let dots pick up color from nearby source regions. At color boundaries
        // this scatters a little of each color into the other, like wet stippling,
        // instead of merely making individual dots lighter or darker.
        const bleedRadius = cellSpacing * 2.5 * settings.printVariation / 100;
        const bleedAngle = seededValue(rotatedX, rotatedY, channel, 815) * Math.PI * 2;
        const bleedDistance = Math.sqrt(seededValue(rotatedX, rotatedY, channel, 816)) * bleedRadius;
        colorSampleX = Math.max(0, Math.min(width - 1, colorSampleX + Math.cos(bleedAngle) * bleedDistance));
        colorSampleY = Math.max(0, Math.min(height - 1, colorSampleY + Math.sin(bleedAngle) * bleedDistance));
      }
      const baseColor = channel === 'source'
        ? getSourceColor(pixels, width, height, colorSampleX, colorSampleY, cellSpacing, settings)
        : color;
      context.fillStyle = pointillism && channel !== 'source'
        ? varyColor(baseColor, (seededValue(rotatedX, rotatedY, channel, 815) - 0.5) * 2 * settings.printVariation / 100)
        : baseColor;
      drawPrintedDot(context, rotatedX + jitterX + noise * spacing, rotatedY + jitterY + noise * spacing, radius * (1 + noise), getDotShape(settings), settings, tone, channel, dotAngle);
    }
  }

  context.globalAlpha = 1;
  context.restore();
}

function varyColor(color: string, amount: number) {
  const match = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(color);
  if (!match || amount === 0) return color;
  const shift = amount * 72;
  const channels = match.slice(1).map((value) =>
    Math.round(Math.max(0, Math.min(255, parseInt(value, 16) + shift)))
      .toString(16)
      .padStart(2, '0'),
  );
  return `#${channels.join('')}`;
}

function getDotShape(settings: Settings): DotShape {
  return settings.shape;
}

function drawPrintedDot(
  context: DrawingContext,
  x: number,
  y: number,
  radius: number,
  shape: DotShape,
  settings: Settings,
  tone: number,
  channel: InkChannel,
  dotAngle: number,
) {
  const alpha = clamp((0.78 + tone * 0.24) * settings.dotOpacity);

  context.save();
  context.globalAlpha *= alpha;
  drawDot(context, x, y, radius, shape, settings, channel, dotAngle);
  context.restore();
}

const bezierPathCache = new WeakMap<BezierCurve, Path2D>();

function drawDot(
  context: DrawingContext,
  x: number,
  y: number,
  radius: number,
  shape: DotShape,
  settings?: Settings,
  channel: InkChannel = 'mono',
  dotAngle = 0,
) {
  context.save();
  context.translate(x, y);
  context.rotate(dotAngle * Math.PI / 180 + getDotRotation(x, y, settings, channel));

  let circleStretch = settings?.circleStretch ?? 100;
  let lineLength = settings?.lineLength ?? 100;
  let distortion = settings?.dotDistortion ?? 0;
  let glyph = firstGlyph(settings?.glyph ?? '');
  const scaledRadius = radius * (settings?.dotScale ?? 1);

  if (shape === 'mixed') {
    const slots = settings?.mixedSlots.filter((item) => item.shape !== 'none') ?? [];
    const slot = slots[Math.floor(seededValue(x, y, channel, 73) * slots.length)];
    if (slot) {
      shape = slot.shape as BaseDotShape;
      circleStretch = slot.circleStretch;
      lineLength = slot.lineLength;
      distortion = slot.distortion;
      glyph = firstGlyph(slot.glyph);
    } else shape = 'circle';
  }

  if (shape === 'circle') {
    drawOrganicCircle(context, scaledRadius * circleStretch / 100, scaledRadius, x, y, distortion);
  } else if (shape === 'line') {
    const width = radius * 2 * lineLength / 100;
    const height = Math.max(0.8, scaledRadius * 0.55);
    drawOrganicLine(context, width, height, x, y, distortion, settings?.lineBend ?? 0, settings?.lineSquareCap ?? false);
  } else if (shape === 'glyph') {
    if (channel === 'source') drawTintedCachedGlyph(context, glyph, scaledRadius);
    else drawCachedGlyph(context, glyph, scaledRadius);
  } else if (shape === 'square') {
    drawOrganicRectangle(context, scaledRadius * 2 * (settings?.squareStretch ?? 100) / 100, scaledRadius * 2, settings?.squareRoundedCorners ? (settings.squareCornerRadius ?? 25) : 0, x, y, distortion);
  } else if (shape === 'cross') {
    drawOrganicCross(context, scaledRadius, x, y, distortion, settings?.crossThickness ?? 100);
  } else if (shape === 'chevron') {
    drawOrganicChevron(context, scaledRadius, x, y, distortion);
  } else if (shape === 'brush') {
    drawBrush(context, scaledRadius, x, y, settings?.brushType ?? 'bristle', distortion);
  } else if (shape === 'svg' && settings?.svgStamp) {
    drawSvgStamp(context, settings.svgStamp, scaledRadius);
  } else if (shape === 'bezier') {
    const curve = settings?.bezierCurve ?? defaultBezier;
    let path = bezierPathCache.get(curve);
    if (!path) {
      path = new Path2D(bezierOutline(curve));
      bezierPathCache.set(curve, path);
    }
    context.translate(-scaledRadius, scaledRadius);
    context.scale(scaledRadius * 2, -scaledRadius * 2);
    context.fill(path);
  }

  context.restore();
}

export function drawBrush(
  context: DrawingContext,
  radius: number,
  dotX: number,
  dotY: number,
  brushType: BrushType,
  texture: number,
) {
  const textureAmount = texture / 100;
  context.save();
  const baseAlpha = context.globalAlpha;
  context.strokeStyle = context.fillStyle;
  context.lineCap = 'round';

  if (brushType === 'conte') {
    // A dense, greasy core with uneven deposits that let coarse paper texture read through.
    context.globalAlpha = baseAlpha * 0.86;
    context.beginPath();
    context.ellipse(0, 0, radius * 1.08, radius * 0.68, -0.12, 0, Math.PI * 2);
    context.fill();
    const deposits = 34;
    for (let grain = 0; grain < deposits; grain += 1) {
      const angle = seededValue(dotX, dotY, 'conte', 810 + grain) * Math.PI * 2;
      const distance = Math.sqrt(seededValue(dotX, dotY, 'conte', 850 + grain)) * radius;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance * 0.64;
      const size = radius * (0.035 + seededValue(dotX, dotY, 'conte', 890 + grain) * 0.11);
      context.globalAlpha = baseAlpha * (0.18 + seededValue(dotX, dotY, 'conte', 930 + grain) * 0.58) * (0.6 + textureAmount * 0.4);
      context.beginPath();
      context.ellipse(x, y, size * 1.8, Math.max(.2, size * .65), angle, 0, Math.PI * 2);
      context.fill();
    }
  } else if (brushType === 'marker') {
    const width = radius * (2.4 + textureAmount * 0.5);
    const height = Math.max(0.8, radius * (1.05 - textureAmount * 0.2));
    context.beginPath();
    context.roundRect(-width / 2, -height / 2, width, height, height * 0.35);
    context.fill();
    context.globalAlpha = baseAlpha * (0.28 + textureAmount * 0.2);
    context.fillRect(-width * 0.38, -height * 0.62, width * 0.76, height * 0.18);
  } else if (brushType === 'rake') {
    const tineCount = 4;
    context.lineWidth = Math.max(0.45, radius * 0.26);
    for (let tine = 0; tine < tineCount; tine += 1) {
      const offsetY = (tine - (tineCount - 1) / 2) * radius * 0.42;
      const lengthNoise = 0.72 + seededValue(dotX, dotY, 'brush', 720 + tine) * 0.45;
      const gap = seededValue(dotX, dotY, 'brush', 730 + tine) * textureAmount * radius * 0.75;
      context.globalAlpha = baseAlpha * (0.82 + seededValue(dotX, dotY, 'brush', 740 + tine) * 0.18);
      context.beginPath();
      context.moveTo(-radius * lengthNoise, offsetY);
      context.lineTo(-gap, offsetY + (seededValue(dotX, dotY, 'brush', 750 + tine) - 0.5) * radius * 0.2);
      context.moveTo(gap, offsetY);
      context.lineTo(radius * lengthNoise, offsetY);
      context.stroke();
    }
  } else {
    const bristleCount = brushType === 'dry' ? 14 : 9;
    for (let bristle = 0; bristle < bristleCount; bristle += 1) {
      const angle = (seededValue(dotX, dotY, 'brush', 610 + bristle) - 0.5) * Math.PI;
      const distance = Math.sqrt(seededValue(dotX, dotY, 'brush', 630 + bristle)) * radius * (brushType === 'dry' ? 1.05 : 0.72);
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance * 0.62;
      const size = radius * (brushType === 'dry' ? 0.12 : 0.22) * (0.55 + seededValue(dotX, dotY, 'brush', 650 + bristle));
      context.globalAlpha = baseAlpha * (brushType === 'dry'
        ? 0.28 + seededValue(dotX, dotY, 'brush', 670 + bristle) * 0.52
        : 0.62 + seededValue(dotX, dotY, 'brush', 670 + bristle) * 0.38);
      context.beginPath();
      context.ellipse(x, y, Math.max(0.25, size * (1 + textureAmount)), Math.max(0.2, size * 0.72), angle, 0, Math.PI * 2);
      context.fill();
    }
    if (brushType === 'bristle') {
      context.globalAlpha = baseAlpha * 0.55;
      context.beginPath();
      context.ellipse(0, 0, radius * 0.82, radius * 0.48, 0, 0, Math.PI * 2);
      context.fill();
    }
  }
  context.restore();
}

function drawSvgStamp(context: DrawingContext, stamp: SvgStamp, radius: number) {
  const [minX, minY, width, height] = stamp.viewBox;
  if (!width || !height || typeof Path2D === 'undefined') return;
  const scale = radius * 2 / Math.max(width, height);
  context.save();
  context.scale(scale, scale);
  context.translate(-minX - width / 2, -minY - height / 2);
  for (const path of stamp.paths) context.fill(new Path2D(path));
  context.restore();
}

function interpolateAngle(start: number, end: number, progress: number) {
  return start + (end - start) * Math.min(1, Math.max(0, progress));
}

function drawOrganicLine(
  context: DrawingContext,
  width: number,
  height: number,
  dotX: number,
  dotY: number,
  distortion: number,
  bendStrength: number,
  squareCap: boolean,
) {
  if (distortion <= 0 && bendStrength <= 0) {
    context.beginPath();
    context.roundRect(-width / 2, -height / 2, width, height, squareCap ? 0 : height / 2);
    context.fill();
    return;
  }

  const curveDirection = seededValue(dotX, dotY, 'shape', 401) < 0.5 ? -1 : 1;
  const curve = (0.35 + seededValue(dotX, dotY, 'shape', 402) * 0.65) * curveDirection;
  const amplitude = Math.min(width * 0.22, height * 3.5);
  const steps = Math.max(8, Math.ceil(width / Math.max(1, height)) * 2);

  context.beginPath();
  for (let step = 0; step <= steps; step += 1) {
    const progress = step / steps;
    const envelope = Math.sin(progress * Math.PI);
    const bend = Math.sin(progress * Math.PI) * curve * bendStrength / 100;
    const roughPrevious = seededValue(dotX, dotY, 'shape', 500 + Math.max(0, step - 1));
    const roughCurrent = seededValue(dotX, dotY, 'shape', 500 + step);
    const roughNext = seededValue(dotX, dotY, 'shape', 500 + Math.min(steps, step + 1));
    const roughness = ((roughPrevious + roughCurrent * 2 + roughNext) / 4 - 0.5) * 2 * distortion / 100 * Math.min(height * 1.2, width * 0.04);
    const pointX = (progress - 0.5) * width;
    const pointY = bend * envelope * amplitude + roughness * envelope;
    if (step === 0) context.moveTo(pointX, pointY);
    else context.lineTo(pointX, pointY);
  }
  context.lineWidth = height;
  context.lineCap = squareCap ? 'square' : 'round';
  context.lineJoin = 'round';
  context.strokeStyle = context.fillStyle;
  context.stroke();
}

function drawOrganicCircle(context: DrawingContext, radiusX: number, radiusY: number, dotX: number, dotY: number, distortion: number) {
  const amount = distortion / 100;
  if (amount <= 0) {
    context.beginPath();
    context.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
    context.fill();
    return;
  }

  // A small ring of widely spaced control points produces broad, rounded
  // lobes. Quadratic interpolation keeps the silhouette smooth at every
  // distortion level rather than exposing dozens of sharp random vertices.
  const anchorCount = 8;
  const anchors: Array<{ x: number; y: number }> = [];
  for (let index = 0; index < anchorCount; index += 1) {
    const angle = index / anchorCount * Math.PI * 2;
    const previous = seededValue(dotX, dotY, 'shape', 301 + ((index + anchorCount - 1) % anchorCount));
    const current = seededValue(dotX, dotY, 'shape', 301 + index);
    const next = seededValue(dotX, dotY, 'shape', 301 + ((index + 1) % anchorCount));
    const variation = ((previous + current * 2 + next) / 4 - 0.5) * amount * 0.7;
    anchors.push({
      x: Math.cos(angle) * radiusX * (1 + variation),
      y: Math.sin(angle) * radiusY * (1 + variation),
    });
  }

  const first = anchors[0];
  const last = anchors[anchorCount - 1];
  context.beginPath();
  context.moveTo((last.x + first.x) / 2, (last.y + first.y) / 2);
  for (let index = 0; index < anchorCount; index += 1) {
    const current = anchors[index];
    const next = anchors[(index + 1) % anchorCount];
    context.quadraticCurveTo(current.x, current.y, (current.x + next.x) / 2, (current.y + next.y) / 2);
  }
  context.closePath();
  context.fill();
}

const glyphStampCache = new Map<string, DrawingCanvas>();
const glyphStampCacheLimit = 256;
const glyphMaskCache = new Map<string, DrawingCanvas>();
let glyphTintCanvas: DrawingCanvas | null = null;

function makeDrawingCanvas(width: number, height: number): DrawingCanvas {
  const canvas = typeof document === 'undefined' ? new OffscreenCanvas(width, height) : document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function getGlyphMask(glyph: string, radius: number) {
  const fontSize = Math.max(2, Math.round(radius * 2.15));
  const key = `${glyph}:${fontSize}`;
  let mask = glyphMaskCache.get(key);
  if (mask) return mask;
  const size = Math.max(4, Math.ceil(fontSize * 1.7));
  mask = makeDrawingCanvas(size, size);
  const maskContext = mask.getContext('2d') as DrawingContext | null;
  if (!maskContext) return null;
  maskContext.fillStyle = '#fff';
  maskContext.font = `700 ${fontSize}px sans-serif`;
  maskContext.textAlign = 'center';
  maskContext.textBaseline = 'middle';
  maskContext.fillText(glyph, size / 2, size / 2);
  glyphMaskCache.set(key, mask);
  return mask;
}

function drawTintedCachedGlyph(context: DrawingContext, glyph: string, radius: number) {
  const mask = getGlyphMask(glyph, radius);
  if (!mask) return;
  if (!glyphTintCanvas) glyphTintCanvas = makeDrawingCanvas(mask.width, mask.height);
  if (glyphTintCanvas.width !== mask.width) glyphTintCanvas.width = mask.width;
  if (glyphTintCanvas.height !== mask.height) glyphTintCanvas.height = mask.height;
  const tintContext = glyphTintCanvas.getContext('2d') as DrawingContext | null;
  if (!tintContext) return;
  tintContext.clearRect(0, 0, mask.width, mask.height);
  tintContext.globalCompositeOperation = 'source-over';
  tintContext.drawImage(mask, 0, 0);
  tintContext.globalCompositeOperation = 'source-in';
  tintContext.fillStyle = context.fillStyle;
  tintContext.fillRect(0, 0, mask.width, mask.height);
  tintContext.globalCompositeOperation = 'source-over';
  context.drawImage(glyphTintCanvas, -mask.width / 2, -mask.height / 2);
}

function drawCachedGlyph(context: DrawingContext, glyph: string, radius: number) {
  // Text shaping is expensive when repeated across thousands of screen cells.
  // Quantized, colored stamps make subsequent dots a cheap image copy.
  const fontSize = Math.max(2, Math.round(radius * 2.15));
  const color = String(context.fillStyle);
  const key = `${glyph}:${fontSize}:${color}`;
  let stamp = glyphStampCache.get(key);
  if (!stamp) {
    const size = Math.max(4, Math.ceil(fontSize * 1.7));
    stamp = typeof document === 'undefined' ? new OffscreenCanvas(size, size) : document.createElement('canvas');
    stamp.width = size;
    stamp.height = size;
    const stampContext = stamp.getContext('2d') as DrawingContext | null;
    if (!stampContext) return;
    stampContext.fillStyle = color;
    stampContext.font = `700 ${fontSize}px sans-serif`;
    stampContext.textAlign = 'center';
    stampContext.textBaseline = 'middle';
    stampContext.fillText(glyph, size / 2, size / 2);
    if (glyphStampCache.size >= glyphStampCacheLimit) {
      const oldestKey = glyphStampCache.keys().next().value;
      if (oldestKey !== undefined) glyphStampCache.delete(oldestKey);
    }
    glyphStampCache.set(key, stamp);
  }
  context.drawImage(stamp, -stamp.width / 2, -stamp.height / 2);
}

function drawOrganicChevron(
  context: DrawingContext,
  radius: number,
  dotX: number,
  dotY: number,
  distortion: number,
) {
  // A filled, right-facing chevron; the shared dot rotation sets its direction.
  const points = [[-1, -1], [-0.3, -1], [1, 0], [-0.3, 1], [-1, 1], [0.3, 0]];
  context.beginPath();
  points.forEach(([x, y], index) => {
    const variation = (seededValue(dotX, dotY, 'shape', 101 + index) - 0.5) * distortion / 100 * 0.75;
    const scale = radius * (1 + variation);
    if (index === 0) context.moveTo(x * scale, y * scale);
    else context.lineTo(x * scale, y * scale);
  });
  context.closePath();
  context.fill();
}

function drawOrganicCross(
  context: DrawingContext,
  radius: number,
  dotX: number,
  dotY: number,
  distortion: number,
  thickness: number,
) {
  const arm = Math.max(0.01, Math.min(1, thickness / 300));
  const points = [
    [-arm, -1], [arm, -1], [arm, -arm], [1, -arm],
    [1, arm], [arm, arm], [arm, 1], [-arm, 1],
    [-arm, arm], [-1, arm], [-1, -arm], [-arm, -arm],
  ];
  context.beginPath();
  points.forEach(([x, y], index) => {
    const variation = (seededValue(dotX, dotY, 'shape', 101 + index) - 0.5) * distortion / 100 * 0.75;
    const scale = radius * (1 + variation);
    if (index === 0) context.moveTo(x * scale, y * scale);
    else context.lineTo(x * scale, y * scale);
  });
  context.closePath();
  context.fill();
}

function drawOrganicRectangle(
  context: DrawingContext,
  width: number,
  height: number,
  roundness: number,
  dotX: number,
  dotY: number,
  distortion: number,
) {
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const radius = Math.min(halfWidth, halfHeight) * roundness / 100;
  if (distortion <= 0) {
    context.beginPath();
    context.roundRect(-halfWidth, -halfHeight, width, height, radius);
    context.fill();
    return;
  }
  const amount = distortion / 100;
  const points: Array<{ x: number; y: number }> = [];
  const addLine = (x1: number, y1: number, x2: number, y2: number) => {
    for (let step = 0; step < 4; step += 1) {
      const progress = step / 4;
      points.push({ x: x1 + (x2 - x1) * progress, y: y1 + (y2 - y1) * progress });
    }
  };
  const addCorner = (centerX: number, centerY: number, startAngle: number) => {
    if (radius <= 0) { points.push({ x: centerX, y: centerY }); return; }
    for (let step = 0; step < 6; step += 1) {
      const cornerAngle = startAngle + step / 6 * Math.PI / 2;
      points.push({ x: centerX + Math.cos(cornerAngle) * radius, y: centerY + Math.sin(cornerAngle) * radius });
    }
  };
  addLine(-halfWidth + radius, -halfHeight, halfWidth - radius, -halfHeight);
  addCorner(halfWidth - radius, -halfHeight + radius, -Math.PI / 2);
  addLine(halfWidth, -halfHeight + radius, halfWidth, halfHeight - radius);
  addCorner(halfWidth - radius, halfHeight - radius, 0);
  addLine(halfWidth - radius, halfHeight, -halfWidth + radius, halfHeight);
  addCorner(-halfWidth + radius, halfHeight - radius, Math.PI / 2);
  addLine(-halfWidth, halfHeight - radius, -halfWidth, -halfHeight + radius);
  addCorner(-halfWidth + radius, -halfHeight + radius, Math.PI);

  context.beginPath();
  for (let step = 0; step < points.length; step += 1) {
    const previous = seededValue(dotX, dotY, 'shape', 101 + ((step + points.length - 1) % points.length));
    const current = seededValue(dotX, dotY, 'shape', 101 + step);
    const next = seededValue(dotX, dotY, 'shape', 101 + ((step + 1) % points.length));
    const variation = ((previous + current * 2 + next) / 4 - 0.5) * amount * 0.75;
    const pointX = points[step].x * (1 + variation);
    const pointY = points[step].y * (1 + variation);
    if (step === 0) context.moveTo(pointX, pointY);
    else context.lineTo(pointX, pointY);
  }
  context.closePath();
  context.fill();
}

function getDotRotation(
  x: number,
  y: number,
  settings: Settings | undefined,
  channel: InkChannel,
) {
  if (!settings) return 0;
  const minimum = normalizeAngle(settings.minAngle);
  const maximum = normalizeAngle(settings.maxAngle);
  const fullCircle = Math.abs(settings.maxAngle - settings.minAngle) >= 360;
  const span = fullCircle ? 360 : minimum === maximum ? 0 : maximum > minimum ? maximum - minimum : 360 - minimum + maximum;
  return normalizeAngle(minimum + seededValue(x, y, channel, 41) * span) * Math.PI / 180;
}

function normalizeAngle(value: number) { return ((value % 360) + 360) % 360; }

function seededValue(x: number, y: number, channel: string, salt: number) {
  const value = Math.sin(Math.round(x * 10) * 12.9898 + Math.round(y * 10) * 78.233 + channel.charCodeAt(0) * 37.719 + salt * 19.371) * 43758.5453;
  return value - Math.floor(value);
}

function getPrintedRadius(
  spacing: number,
  tone: number,
  shadowThickness = 90,
) {
  // Area, rather than a fixed pixel radius, follows source coverage.
  // This keeps tighter grids from artificially filling the midtones.
  const coverage = clamp(tone);
  // Preserve highlights and midtones, then gently reduce shadow sizes.
  const shadow = smoothstep(0.5, 1, coverage);
  const thickness = Math.min(100, Math.max(85, shadowThickness)) / 100;
  const shadowScale = 1 - (1 - thickness) * shadow;
  return spacing * Math.sqrt(coverage / Math.PI) * shadowScale;
}

function getChannelOffset(channel: InkChannel, amount: number) {
  if (channel === 'mono' || channel === 'duotoneLight' || channel === 'duotoneDark' || channel === 'source') return { x: 0, y: 0 };

  const offsets = { cyan: { x: amount, y: 0 }, magenta: { x: -amount, y: amount }, yellow: { x: 0, y: -amount }, black: { x: 0, y: 0 } };
  return offsets[channel];
}

function getTone(
  pixels: Uint8ClampedArray,
  width: number,
  height: number,
  x: number,
  y: number,
  spacing: number,
  channel: InkChannel,
  settings: Settings,
) {
  const radius = Math.max(1, Math.round(spacing * 0.26));
  let total = 0;
  let count = 0;

  for (let sampleY = Math.max(0, Math.round(y) - radius); sampleY <= Math.min(height - 1, Math.round(y) + radius); sampleY += 2) {
    for (let sampleX = Math.max(0, Math.round(x) - radius); sampleX <= Math.min(width - 1, Math.round(x) + radius); sampleX += 2) {
      const index = (sampleY * width + sampleX) * 4;
      const [r, g, b] = adjustSaturation(
        pixels[index] / 255,
        pixels[index + 1] / 255,
        pixels[index + 2] / 255,
        settings.saturation,
      );
      const alpha = pixels[index + 3] / 255;
      total += channelCoverage(r, g, b, channel) * alpha;
      count += alpha;
    }
  }

  if (!count) return 0;
  const average = total / count;
  return applyToneCurve(average, settings);
}

function getSourceColor(
  pixels: Uint8ClampedArray,
  width: number,
  height: number,
  x: number,
  y: number,
  spacing: number,
  settings: Settings,
) {
  const radius = Math.max(1, Math.round(spacing * 0.26));
  let red = 0;
  let green = 0;
  let blue = 0;
  let weight = 0;
  for (let sampleY = Math.max(0, Math.round(y) - radius); sampleY <= Math.min(height - 1, Math.round(y) + radius); sampleY += 2) {
    for (let sampleX = Math.max(0, Math.round(x) - radius); sampleX <= Math.min(width - 1, Math.round(x) + radius); sampleX += 2) {
      const index = (sampleY * width + sampleX) * 4;
      const alpha = pixels[index + 3] / 255;
      red += pixels[index] * alpha;
      green += pixels[index + 1] * alpha;
      blue += pixels[index + 2] * alpha;
      weight += alpha;
    }
  }
  if (!weight) return 'transparent';
  const adjusted = adjustSaturation(
    red / weight / 255,
    green / weight / 255,
    blue / weight / 255,
    settings.saturation,
  );
  const [r, g, b] = adjusted;
  return `rgb(${Math.round(r * 255)} ${Math.round(g * 255)} ${Math.round(b * 255)})`;
}

function adjustSaturation(r: number, g: number, b: number, saturation: number) {
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const amount = 1 + saturation / 100;
  return [
    clamp(luminance + (r - luminance) * amount),
    clamp(luminance + (g - luminance) * amount),
    clamp(luminance + (b - luminance) * amount),
  ] as const;
}

function applyToneCurve(tone: number, settings: Settings) {
  const contrasted = (tone - 0.5) * (1 + settings.contrast / 100) + 0.5 + settings.threshold;
  return Math.pow(clamp(contrasted), settings.gamma);
}

function channelCoverage(r: number, g: number, b: number, channel: InkChannel) {
  if (channel === 'mono' || channel === 'source') {
    return 1 - (0.2126 * r + 0.7152 * g + 0.0722 * b);
  }

  const darkness = 1 - (0.2126 * r + 0.7152 * g + 0.0722 * b);
  if (channel === 'duotoneLight') return darkness * (1 - smoothstep(0.72, 1, darkness) * 0.55);
  if (channel === 'duotoneDark') return smoothstep(0.28, 0.92, darkness);

  const k = 1 - Math.max(r, g, b);
  if (channel === 'black') return k;

  const denominator = 1 - k || 1;
  if (channel === 'cyan') return clamp((1 - r - k) / denominator) * (1 - k);
  if (channel === 'magenta') return clamp((1 - g - k) / denominator) * (1 - k);
  return clamp((1 - b - k) / denominator) * (1 - k);
}

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

function smoothstep(edge0: number, edge1: number, value: number) {
  const amount = clamp((value - edge0) / (edge1 - edge0));
  return amount * amount * (3 - 2 * amount);
}

function getPaperColor(warmth: number) {
  const amount = Math.min(1, Math.max(0, warmth / 100));
  const cool = { r: 246, g: 246, b: 241 };
  const cream = { r: 251, g: 243, b: 222 };
  const r = cool.r + (cream.r - cool.r) * amount;
  const g = cool.g + (cream.g - cool.g) * amount;
  const b = cool.b + (cream.b - cool.b) * amount;
  return `rgb(${Math.round(r)} ${Math.round(g)} ${Math.round(b)})`;
}

// Compare source colors in perceptual OKLab space, before image adjustments.
function toOklab(r: number, g: number, b: number) {
  const linear = (v: number) => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  r = linear(r / 255); g = linear(g / 255); b = linear(b / 255);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s];
}

export function createColorMixSampler(pixels: Uint8ClampedArray, width: number, height: number, colorA: string, colorB: string, softness: number) {
  const parse = (hex: string) => toOklab(...[1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16)) as [number, number, number]);
  const a = parse(colorA), b = parse(colorB);
  const cache = new Float32Array(width * height).fill(-1);
  const distance = (p: number[], q: number[]) => Math.hypot(...p.map((v, i) => v - q[i]));
  return (x: number, y: number) => {
    const index = Math.min(height - 1, Math.max(0, Math.floor(y))) * width + Math.min(width - 1, Math.max(0, Math.floor(x)));
    if (cache[index] >= 0) return cache[index];
    const offset = index * 4;
    if (!pixels[offset + 3]) return 0.5;
    const sample = toOklab(pixels[offset], pixels[offset + 1], pixels[offset + 2]);
    const da = distance(sample, a), db = distance(sample, b);
    const total = da + db;
    const ratio = total < 1e-7 ? 0.5 : da / total;
    const spread = Math.max(0.01, Math.min(1, softness / 100));
    const value = clamp(0.5 + (ratio - 0.5) / spread);
    cache[index] = value;
    return value;
  };
}

// The final encoded frame starts one frame interval before the clip ends.
export function getAnimationProgress(time: number, duration: number, frameRate: number, animateMix: boolean) {
  const end = animateMix ? Math.max(1 / frameRate, duration - 1 / frameRate) : duration;
  return clamp(time / end);
}

// One image-space field is shared by both shapes and every ink plate.
export function createSpatialMixSampler(width: number, height: number, settings: Settings, animationProgress = 0) {
  const angle = settings.mixDirection === 'vertical' ? 90 : settings.mixDirection === 'diagonal' ? 45 : settings.mixDirection === 'custom' ? settings.mixAngle : 0;
  const cos = Math.cos(angle * Math.PI / 180), sin = Math.sin(angle * Math.PI / 180);
  const span = width * Math.abs(cos) + height * Math.abs(sin);
  const cx = width * settings.mixCenterX / 100, cy = height * settings.mixCenterY / 100;
  const radius = Math.hypot(Math.max(cx, width - cx), Math.max(cy, height - cy));
  const scale = Math.max(1, Math.min(width, height) * settings.mixNoiseScale / 100);
  const time = settings.animateMix ? clamp(animationProgress) * settings.mixFlowSpeed : 0;
  const seed = settings.mixNoiseSeed;
  return (x: number, y: number) => {
    if (settings.mixPattern === 'radial') {
      const distance = clamp(Math.hypot(x - cx, y - cy) / radius);
      return settings.mixRadialInward ? distance : 1 - distance;
    }
    if (settings.mixPattern === 'noise') {
      const u = x / scale, v = y / scale;
      // Smooth domain warping makes patches curl and evolve without frame flicker.
      const warpX = flowNoise(u * 0.6 + time * 0.3, v * 0.6, seed + 17) - 0.5;
      const warpY = flowNoise(u * 0.6, v * 0.6 - time * 0.25, seed + 53) - 0.5;
      const px = u + warpX * 1.6 + time * 0.35;
      const py = v + warpY * 1.6 - time * 0.2;
      const value = flowNoise(px, py, seed) * 0.75 + flowNoise(px * 2, py * 2, seed + 101) * 0.25;
      return clamp((value - 0.15) / 0.7);
    }
    return clamp(0.5 + ((x - width / 2) * cos + (y - height / 2) * sin) / span);
  };
}

function flowNoise(x: number, y: number, seed: number) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const fx = fade(x - ix), fy = fade(y - iy);
  const hash = (a: number, b: number) => {
    let n = Math.imul(a, 374761393) ^ Math.imul(b, 668265263) ^ Math.imul(seed, 1442695041);
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
  };
  const top = hash(ix, iy) * (1 - fx) + hash(ix + 1, iy) * fx;
  const bottom = hash(ix, iy + 1) * (1 - fx) + hash(ix + 1, iy + 1) * fx;
  return top * (1 - fy) + bottom * fy;
}
