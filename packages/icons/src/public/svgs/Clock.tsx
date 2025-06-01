import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0m0 22a10 10 0 1 1 10-10 10.01 10.01 0 0 1-10 10" />
    <path d="M12 6a1 1 0 0 0-1 1v4.325l-3.371 2.112a1 1 0 0 0 1.062 1.7l3.84-2.4a1 1 0 0 0 .469-.858V7a1 1 0 0 0-1-1" />
  </svg>
);
export default SvgClock;
