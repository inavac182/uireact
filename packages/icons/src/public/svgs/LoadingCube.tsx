import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLoadingCube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
    {...props}
  >
    <path fill="#e15b64" d="M6.667 6.667h40v40h-40z">
      <animateTransform
        attributeName="transform"
        begin="-0.3s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="scale"
        values="1.1500000000000001;1"
      />
    </path>
    <path fill="#f47e60" d="M53.333 6.667h40v40h-40z">
      <animateTransform
        attributeName="transform"
        begin="-0.2s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="scale"
        values="1.1500000000000001;1"
      />
    </path>
    <path fill="#f8b26a" d="M6.667 53.333h40v40h-40z">
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="scale"
        values="1.1500000000000001;1"
      />
    </path>
    <path fill="#abbd81" d="M53.333 53.333h40v40h-40z">
      <animateTransform
        attributeName="transform"
        begin="-0.1s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="scale"
        values="1.1500000000000001;1"
      />
    </path>
  </svg>
);
export default SvgLoadingCube;
