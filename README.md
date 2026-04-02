# bairdlangenbrunner

Personal website for Baird Langenbrunner — climate scientist, data visualizer, and map enthusiast.

Built with React, Vite, and D3.

## Pages

- **/** — Home, featuring an animated map projection
- **/about** — Bio and background
- **/projects** — Links to side projects and external work

## The animated map

The home page displays an SVG world map rendered with D3's geo projection library. On each page load, a projection is randomly selected from a configurable list in `src/lib/projections.js` (currently set to Interrupted Goode Homolosine, but others like Baker, Collignon, Gingery, etc. can be toggled on).

The map continuously rotates with a slow, organic wandering motion. This is driven by pseudo-Perlin noise — specifically, two independent noise functions (one for longitude, one for latitude) each built from 5 layered sine waves with randomized frequencies, amplitudes, and phase offsets. The sum of these sine layers produces smooth, non-repeating drift that makes the continents appear to ooze around inside the projection. Each page load seeds new random parameters, so the motion pattern is always unique.

The animation runs via `requestAnimationFrame`, updating the projection's rotation and re-rendering the SVG paths each frame. Land geometry comes from a TopoJSON world atlas loaded once on mount. The map also responds to window resizes, refitting the projection to the container while preserving its current rotation.

Key files:

- `src/components/Homolosines.jsx` — Map component, animation loop, and noise functions
- `src/lib/projections.js` — Projection definitions (comment/uncomment to enable)

## Development

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```
