import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLoadingDualCircles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
    {...props}
  >
    <circle cx={30} cy={50} r={20} fill="#e90c59">
      <animate
        attributeName="cx"
        begin="-0.5s"
        dur="1s"
        keyTimes="0;0.5;1"
        repeatCount="indefinite"
        values="30;70;30"
      />
    </circle>
    <circle cx={70} cy={50} r={20} fill="#46dff0">
      <animate attributeName="cx" begin="0s" dur="1s" keyTimes="0;0.5;1" repeatCount="indefinite" values="30;70;30" />
    </circle>
    <circle cx={30} cy={50} r={20} fill="#e90c59">
      <animate
        attributeName="cx"
        begin="-0.5s"
        dur="1s"
        keyTimes="0;0.5;1"
        repeatCount="indefinite"
        values="30;70;30"
      />
      <animate
        attributeName="fill-opacity"
        calcMode="discrete"
        dur="1s"
        keyTimes="0;0.499;0.5;1"
        repeatCount="indefinite"
        values="0;0;1;1"
      />
    </circle>
  </svg>
);
export default SvgLoadingDualCircles;
