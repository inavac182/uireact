import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarcode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
    <path d="M1 22a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v18a1 1 0 0 1-1 1Zm5-1V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0Zm15 0V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0Zm-8 0V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0Zm-3-.5v-17a1.5 1.5 0 1 0-3 0v17a1.5 1.5 0 1 0 3 0Zm8 0v-17a1.5 1.5 0 1 0-3 0v17a1.5 1.5 0 1 0 3 0Zm6 .5V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0Z" />
  </svg>
);
export default SvgBarcode;
