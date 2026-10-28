// Keep combining marks, variation selectors, and joined emoji together.
const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
const cache = new Map<string, string>();

export function firstGlyph(text: string, fallback = "✦"): string {
  if (!text) return fallback;
  const cached = cache.get(text);
  if (cached !== undefined) return cached;
  const glyph = segmenter.segment(text)[Symbol.iterator]().next().value?.segment ?? fallback;
  if (cache.size >= 128) cache.clear();
  cache.set(text, glyph);
  return glyph;
}
