import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 209.28 209.28"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M104.641 0C46.943 0 .002 46.94.002 104.637c0 57.701 46.941 104.643 104.639 104.643 57.697 0 104.637-46.943 104.637-104.643C209.278 46.94 162.338 0 104.641 0zm0 194.28c-49.427 0-89.639-40.214-89.639-89.643C15.002 55.211 55.214 15 104.641 15c49.426 0 89.637 40.211 89.637 89.637 0 49.429-40.211 89.643-89.637 89.643z" />
    <path d="M158.445 102.886h-49.174V49.134a7.5 7.5 0 0 0-15 0v61.252a7.5 7.5 0 0 0 7.5 7.5h56.674a7.5 7.5 0 0 0 0-15z" />
  </svg>
);
export default SvgClock;
