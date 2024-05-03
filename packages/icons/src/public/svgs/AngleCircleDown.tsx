import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgAngleCircleDown = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" />
    <motion.path {...props.motionPath} d="M12 16a2.993 2.993 0 0 1-1.987-.752 22.053 22.053 0 0 1-.84-.777L6.3 11.647a1 1 0 0 1 1.4-1.426l2.88 2.829c.188.187.468.441.759.7a1 1 0 0 0 1.323 0c.29-.258.57-.512.752-.693l2.886-2.836a1 1 0 1 1 1.4 1.426l-2.879 2.829c-.2.2-.507.48-.833.769A2.99 2.99 0 0 1 12 16Z" />
  </motion.svg>
);
export default SvgAngleCircleDown;
