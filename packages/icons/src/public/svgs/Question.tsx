import * as React from 'react';
import type { SVGProps } from 'react';
const SvgQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0m0 22a10 10 0 1 1 10-10 10.01 10.01 0 0 1-10 10" />
    <path d="M12.717 5.063A4 4 0 0 0 8 9a1 1 0 0 0 2 0 2 2 0 0 1 2.371-1.967 2.02 2.02 0 0 1 1.6 1.595 2 2 0 0 1-1 2.125A3.95 3.95 0 0 0 11 14.257V15a1 1 0 0 0 2 0v-.743a1.98 1.98 0 0 1 .93-1.752 4 4 0 0 0-1.213-7.442" />
    <rect width={2} height={2} x={11} y={17} rx={1} />
  </svg>
);
export default SvgQuestion;
