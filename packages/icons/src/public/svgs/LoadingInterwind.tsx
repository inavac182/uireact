import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLoadingInterwind = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
    {...props}
  >
    <g transform="translate(0 -7.5)">
      <circle cx={50} cy={41} r={10} fill="#fe718d">
        <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
        />
        <animate
          attributeName="r"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="0;15;0"
        />
      </circle>
      <circle cx={50} cy={41} r={10} fill="#46dff0">
        <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="180 50 50;540 50 50"
        />
        <animate
          attributeName="r"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="15;0;15"
        />
      </circle>
    </g>
  </svg>
);
export default SvgLoadingInterwind;
