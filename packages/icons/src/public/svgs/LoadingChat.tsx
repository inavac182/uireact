import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLoadingChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
    {...props}
  >
    <path
      fill="none"
      stroke="#abbd81"
      strokeWidth={5}
      d="M82 50a32 32 0 1 1-58.467-17.987l-1.817-10.297 10.297 1.817A32 32 0 0 1 82 50"
    />
    <circle
      cx={50}
      cy={50}
      r={20}
      fill="none"
      stroke="#abbd81"
      strokeDasharray="31.41592653589793 31.41592653589793"
      strokeLinecap="round"
      strokeWidth={5}
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
);
export default SvgLoadingChat;
