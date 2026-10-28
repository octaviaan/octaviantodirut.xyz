export type Point = { x: number; y: number };
export type CubicPoints = [Point, Point, Point, Point];
export type CurvePoints = [Point, Point, Point, Point, Point, Point, Point];
export type BezierCurve = {
  points: CubicPoints | CurvePoints;
  width: number;
  taperStart: number;
  taperEnd: number;
  taperMiddle?: number;
  cap: 'round' | 'butt';
};
export const defaultBezier: BezierCurve = {
  points: [{ x: 0, y: 0 }, { x: .125, y: .05 }, { x: .3125, y: .275 }, { x: .5, y: .5 }, { x: .6875, y: .725 }, { x: .875, y: .95 }, { x: 1, y: 1 }],
  width: 12, taperStart: 0, taperMiddle: 0, taperEnd: 0, cap: 'round',
};
export const bezierPresets: Record<string, BezierCurve['points']> = {
  Straight: [{ x: .1, y: .2 }, { x: .35, y: .4 }, { x: .65, y: .6 }, { x: .9, y: .8 }],
  Arc: [{ x: .1, y: .2 }, { x: .1, y: 1 }, { x: .9, y: 1 }, { x: .9, y: .2 }],
  'S-curve': [{ x: .1, y: .1 }, { x: 1, y: .1 }, { x: 0, y: .9 }, { x: .9, y: .9 }],
  Loop: [{ x: .35, y: .15 }, { x: 1.2, y: 1.2 }, { x: -.2, y: 1.2 }, { x: .65, y: .15 }],
};
const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
// Split existing curves exactly in half so adding an anchor preserves their shape.
const normalizedCurves = new WeakMap<BezierCurve, BezierCurve & { points: CurvePoints; taperMiddle: number }>();
export function normalizeBezierCurve(curve: BezierCurve): BezierCurve & { points: CurvePoints; taperMiddle: number } {
  if (curve.points.length === 7 && curve.taperMiddle !== undefined) return curve as BezierCurve & { points: CurvePoints; taperMiddle: number };
  const cached = normalizedCurves.get(curve);
  if (cached) return cached;
  const mid = (a: Point, b: Point): Point => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
  let points: CurvePoints;
  if (curve.points.length === 4) {
    const [a, b, c, d] = curve.points;
    const ab = mid(a, b), bc = mid(b, c), cd = mid(c, d);
    const left = mid(ab, bc), right = mid(bc, cd);
    points = [{ ...a }, ab, left, mid(left, right), right, cd, { ...d }];
  } else points = curve.points;
  const result = { ...curve, points, taperMiddle: curve.taperMiddle ?? 0 };
  normalizedCurves.set(curve, result);
  return result;
}
export function moveBezierPoint(curve: BezierCurve, index: number, position: Point): BezierCurve {
  const normalized = normalizeBezierCurve(curve);
  const points = normalized.points.map(p => ({ ...p })) as CurvePoints;
  // Anchors carry their own handles. Middle handles mirror each other for a smooth join.
  if (index === 2 || index === 4) {
    const anchor = points[3], other = index === 2 ? 4 : 2;
    const dx = clamp(position.x - anchor.x, -Math.min(anchor.x + .25, 1.25 - anchor.x), Math.min(anchor.x + .25, 1.25 - anchor.x));
    const dy = clamp(position.y - anchor.y, -Math.min(anchor.y + .25, 1.25 - anchor.y), Math.min(anchor.y + .25, 1.25 - anchor.y));
    points[index] = { x: anchor.x + dx, y: anchor.y + dy };
    points[other] = { x: anchor.x - dx, y: anchor.y - dy };
    return { ...normalized, points };
  }
  const moving = index === 0 ? [0, 1] : index === 3 ? [2, 3, 4] : index === 6 ? [5, 6] : [index];
  const dx = clamp(position.x - points[index].x, Math.max(...moving.map(i => -.25 - points[i].x)), Math.min(...moving.map(i => 1.25 - points[i].x)));
  const dy = clamp(position.y - points[index].y, Math.max(...moving.map(i => -.25 - points[i].y)), Math.min(...moving.map(i => 1.25 - points[i].y)));
  for (const i of moving) { points[i].x += dx; points[i].y += dy; }
  return { ...normalized, points };
}
export function bezierPoint(points: BezierCurve['points'], t: number): Point {
  const offset = points.length === 7 && t > .5 ? 3 : 0;
  const local = points.length === 7 ? (t - (offset ? .5 : 0)) * 2 : t;
  const u = 1 - local;
  return {
    x: u ** 3 * points[offset].x + 3 * u * u * local * points[offset + 1].x + 3 * u * local * local * points[offset + 2].x + local ** 3 * points[offset + 3].x,
    y: u ** 3 * points[offset].y + 3 * u * u * local * points[offset + 1].y + 3 * u * local * local * points[offset + 2].y + local ** 3 * points[offset + 3].y,
  };
}
const smooth = (v: number) => { const t = clamp(v, 0, 1); return t * t * (3 - 2 * t); };
export function bezierWidth(curve: BezierCurve, t: number) {
  const start = 1 - clamp(curve.taperStart, 0, 100) / 100 * (1 - smooth(t * 2));
  const end = 1 - clamp(curve.taperEnd, 0, 100) / 100 * (1 - smooth((1 - t) * 2));
  const middle = 1 - clamp(curve.taperMiddle ?? 0, 0, 100) / 100 * smooth(1 - Math.abs(2 * t - 1));
  return clamp(curve.width, 1, 60) / 100 * start * middle * end;
}
// Shared filled outline for the editor, main-thread preview, and export workers.
// Coordinates use X right / Y up and a one-unit nominal shape size.
export function bezierOutline(curve: BezierCurve, steps = 64): string {
  const centers = Array.from({ length: steps + 1 }, (_, i) => bezierPoint(curve.points, i / steps));
  const left: Point[] = [], right: Point[] = [], normals: Point[] = [];
  for (let i = 0; i <= steps; i++) {
    const before = centers[Math.max(0, i - 1)], after = centers[Math.min(steps, i + 1)];
    const dx = after.x - before.x, dy = after.y - before.y, length = Math.hypot(dx, dy);
    const n = length > 1e-9 ? { x: -dy / length, y: dx / length } : (normals[i - 1] ?? { x: 0, y: 1 });
    normals.push(n);
    const half = bezierWidth(curve, i / steps) / 2;
    left.push({ x: centers[i].x + n.x * half, y: centers[i].y + n.y * half });
    right.push({ x: centers[i].x - n.x * half, y: centers[i].y - n.y * half });
  }
  const points = [...left];
  const cap = (index: number, sign: number) => {
    if (curve.cap !== 'round') return;
    const center = centers[index], n = normals[index], half = bezierWidth(curve, index / steps) / 2;
    const angle = Math.atan2(n.y * sign, n.x * sign);
    for (let j = 1; j < 9; j++) {
      const a = angle - j * Math.PI / 8;
      points.push({ x: center.x + Math.cos(a) * half, y: center.y + Math.sin(a) * half });
    }
  };
  cap(steps, 1);
  points.push(...right.reverse());
  cap(0, -1);
  return points.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(5)},${p.y.toFixed(5)}`).join(' ') + ' Z';
}
