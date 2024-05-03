import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgCheckComment = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M17.712 6.298a.999.999 0 0 1-.01 1.414l-5.793 5.707a2.001 2.001 0 0 1-2.823-.005l-2.782-2.696a.999.999 0 1 1 1.392-1.436l2.793 2.707 5.809-5.701a1 1 0 0 1 1.414.011ZM24 4v12c0 2.206-1.794 4-4 4h-2.852l-3.847 3.18a1.94 1.94 0 0 1-1.293.484 2.01 2.01 0 0 1-1.337-.507L6.923 20H4c-2.206 0-4-1.794-4-4V4c0-2.206 1.794-4 4-4h16c2.206 0 4 1.794 4 4Zm-2 0c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.289c.236 0 .464.083.645.235l4.047 3.41 4.17-3.416c.18-.148.405-.229.638-.229h3.212c1.103 0 2-.897 2-2V4Z" />
  </motion.svg>
);
export default SvgCheckComment;
