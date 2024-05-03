import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsMcdonalds = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg}
      d="M15.771 2.4c-1.939 0-3.668 2.584-4.8 6.623C9.84 4.984 8.11 2.4 6.172 2.4 2.764 2.4 0 10.996 0 21.6h2.743c0-9.846 1.535-17.828 3.428-17.828S9.6 11.14 9.6 20.228h2.743c0-9.088 1.535-16.456 3.428-16.456S19.2 11.754 19.2 21.599h2.742C21.943 10.996 19.18 2.4 15.771 2.4zM23.323 20.228h-.006a.682.682 0 0 0-.688.683.684.684 0 0 0 .679.689h.009a.682.682 0 0 0 .684-.689.682.682 0 0 0-.678-.683zm-.007 1.271c-.319 0-.563-.253-.563-.589 0-.328.244-.581.563-.581.315 0 .559.253.559.582.001.335-.244.588-.559.588z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
    <motion.path {...props.pathSvg}
      d="M23.304 20.869h-.13v-.255h.164c.084 0 .175.016.175.122 0 .127-.1.133-.209.133zm.333-.127c0-.153-.089-.229-.278-.229h-.309v.801h.124v-.344h.132l.216.345h.134l-.227-.354c.117-.014.208-.074.208-.219z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
  </motion.svg>
);
export default SvgBrandsMcdonalds;
