# Hero halftone

The canvas renderer and its geometry/tone helpers are adapted from the local
`Graphic Generators/Halftone Fun/app/lib` implementation. Editor controls,
exports, workers, and third-party color-profile dependencies are not included.

`portrait-settings.ts` recreates the GIF's black halftone → CMYK stipple look.
These are reconstructed settings, not an exported preset. The component adds
warm ink separation to the available grayscale portrait to approximate the
reference GIF's yellow face while retaining the lavender shirt.

`components/hero-portrait.tsx` owns the reversible 1.4-second timeline. It drives
`mixRatio` directly rather than the generator's looping `animateMix` timeline,
so reversing does not jump or wait through the original hold frames. Animation
stops at either endpoint, offscreen, and while the document is hidden. Reduced
motion keeps the resting state. Keyboard focus activates it; touch holds play
forward and releasing reverses.

The source portrait is `public/images/hero-face-sequence/face-center.jpg`,
flattened onto white from the original portrait. Near-white pixels are excluded
from the warm ink tint so the JPEG background stays clear of colored dots.

The static WebP is the GIF's first frame, used before canvas initialization or
if the source cannot load. The animated GIF is not loaded by the hero.
