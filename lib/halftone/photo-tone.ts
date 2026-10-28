export type ToneAdjustments = { shadows: number; midtones: number; highlights: number };
const clamp = (v: number) => Math.max(0, Math.min(1, v));

// A monotone cubic curve through independently movable tonal anchors.
// Their ranges cannot cross, avoiding reversals/solarization at extreme settings.
export function createToneLut(settings: ToneAdjustments): Float32Array {
  const x = [0, .2, .5, .8, 1];
  const amount = (v: number) => Math.max(-100, Math.min(100, v || 0)) / 100;
  const y = [0, .2 + .14 * amount(settings.shadows), .5 + .14 * amount(settings.midtones), .8 + .14 * amount(settings.highlights), 1];
  const slopes = x.slice(1).map((v, i) => (y[i + 1] - y[i]) / (v - x[i]));
  const tangents = [slopes[0], ...[1, 2, 3].map(i => {
    const a = x[i] - x[i - 1], b = x[i + 1] - x[i];
    return 3 * (a + b) / ((2 * b + a) / slopes[i - 1] + (b + 2 * a) / slopes[i]);
  }), slopes[3]];
  return Float32Array.from({ length: 257 }, (_, i) => {
    const v = i / 256;
    const j = v < .2 ? 0 : v < .5 ? 1 : v < .8 ? 2 : 3;
    const h = x[j + 1] - x[j], t = (v - x[j]) / h;
    return clamp((2 * t ** 3 - 3 * t * t + 1) * y[j] + (t ** 3 - 2 * t * t + t) * h * tangents[j] + (-2 * t ** 3 + 3 * t * t) * y[j + 1] + (t ** 3 - t * t) * h * tangents[j + 1]);
  });
}
export function applyPhotoTones(pixels: Uint8ClampedArray, settings: ToneAdjustments) {
  if (!settings.shadows && !settings.midtones && !settings.highlights) return;
  const lut = createToneLut(settings);
  for (let i = 0; i < pixels.length; i += 4) {
    if (!pixels[i + 3]) continue;
    const luminance = (.2126 * pixels[i] + .7152 * pixels[i + 1] + .0722 * pixels[i + 2]) / 255;
    const at = luminance * 256, lower = Math.floor(at), fraction = at - lower;
    const target = lut[lower] * (1 - fraction) + lut[Math.min(256, lower + 1)] * fraction;
    // Move toward black/white without clipping individual color channels.
    if (target > luminance && luminance < 1) {
      const lift = (target - luminance) / (1 - luminance);
      for (let c = 0; c < 3; c++) pixels[i + c] += (255 - pixels[i + c]) * lift;
    } else if (luminance > 0) {
      const gain = target / luminance;
      for (let c = 0; c < 3; c++) pixels[i + c] *= gain;
    }
  }
}
