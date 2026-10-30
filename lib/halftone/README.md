# Hero portrait

The canvas renderer and its geometry/tone helpers are adapted from the local
`Graphic Generators/Halftone Fun/app/lib` implementation.

The portrait rests in mono with aligned lines. Hovering or focusing either
hero action (View case studies or Play intro) expands its line angle range
from 0°–0° to 0°–360° and transitions to colored CMYK ink. Leaving or blurring
reverses it. Moving the mouse left to right over the portrait directly controls
the angle range and color mix. Pointer control takes priority over button focus
and renders at most once per animation frame. Leaving restores the button or
resting state. Navbar links do not trigger animation.

`components/hero-portrait.tsx` owns the reversible timeline. Change `DURATION_MS`
to adjust its speed (currently 600 ms). Rendering stops at the endpoints,
offscreen, and while the document is hidden. Reduced motion keeps the resting
state. Listeners and animation frames are cleaned up when the component unmounts.

Tune `portraitLineSettings` and `portraitLineColorSettings` in
`portrait-settings.ts` for the visible line treatments. The original circle
presets remain available in code through `<HeroPortrait effect="halftone" />`,
with independently editable `portraitRestSettings` and `portraitHoverSettings`.
There is no effect selector in the UI.

The canvas loads `public/images/portrait.jpg`; `portrait.jpeg` is the static
fallback. The component adds warm ink separation to grayscale pixels while
retaining the lavender shirt. Near-white pixels are excluded from this tint.
