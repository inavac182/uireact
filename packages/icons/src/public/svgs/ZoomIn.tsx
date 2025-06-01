import * as React from 'react';
import type { SVGProps } from 'react';
const SvgZoomIn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414M10 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8" />
    <path d="M13 9h-2V7a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2" />
  </svg>
);
export default SvgZoomIn;
