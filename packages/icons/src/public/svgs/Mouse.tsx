import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M13 3V1a1 1 0 0 0-2 0v2a7.01 7.01 0 0 0-7 7v6a8 8 0 0 0 16 0v-6a7.01 7.01 0 0 0-7-7m5 13a6 6 0 0 1-12 0v-6a5.006 5.006 0 0 1 5-5h2a5.006 5.006 0 0 1 5 5Z" />
    <path d="M12 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1" />
  </svg>
);
export default SvgMouse;
