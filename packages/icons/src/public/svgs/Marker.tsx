import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M12 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2" />
    <path d="M12 24a5.27 5.27 0 0 1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055 10.055 0 0 1 20.11 0c0 2.538-1.933 6.49-5.744 11.747A5.27 5.27 0 0 1 12 24m0-21.819a7.883 7.883 0 0 0-7.874 7.874c0 2.01 1.893 5.727 5.329 10.466a3.145 3.145 0 0 0 5.09 0c3.436-4.739 5.329-8.456 5.329-10.466A7.883 7.883 0 0 0 12 2.181" />
  </svg>
);
export default SvgMarker;
