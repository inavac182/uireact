import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgArrowClearLeft = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M23 11H6V7.639c0-.695-.852-1.044-1.35-.552L.232 11.448a.773.773 0 0 0 0 1.104l4.418 4.361c.498.492 1.35.143 1.35-.552V13h17a1 1 0 1 0 0-2Z" />
  </motion.svg>
);
export default SvgArrowClearLeft;
