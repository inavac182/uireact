import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgTrashCircle = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="1em" height="1em" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10Zm5-14h-2V7c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v1H7a1 1 0 1 0 0 2v6c0 1.654 1.346 3 3 3h4c1.654 0 3-1.346 3-3v-6a1 1 0 1 0 0-2Zm-6-1h2v1h-2V7Zm4 9c0 .551-.448 1-1 1h-4c-.552 0-1-.449-1-1v-6h6v6Z" />
  </motion.svg>
);
export default SvgTrashCircle;
