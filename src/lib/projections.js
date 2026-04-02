import * as d3 from 'd3-geo';
import * as d3Proj from 'd3-geo-projection';

// All 36 projections from projection-explorer.
// Uncomment any to make them available.

export const projections = [
  // { name: 'Baker', fn: () => d3Proj.geoBaker().precision(0.1) },
  // { name: 'August', fn: () => d3Proj.geoAugust().precision(0.1) },
  // { name: 'Armadillo', fn: () => d3Proj.geoArmadillo().precision(0.1) },
  // { name: 'Collignon', fn: () => d3Proj.geoCollignon().precision(0.1) },
  // { name: 'Gingery', fn: () => d3Proj.geoGingery().precision(0.1) },
  // { name: 'Berghaus Star', fn: () => d3Proj.geoBerghaus().precision(0.1) },
  // { name: 'Loximuthal', fn: () => d3Proj.geoLoximuthal().precision(0.1) },
  // { name: 'Bottomley', fn: () => d3Proj.geoBottomley().precision(0.1) },
  { name: 'Interrupted Goode Homolosine', fn: () => d3Proj.geoInterruptedHomolosine().precision(0.1) },
];
