import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgUserDelete = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M10.968 15.003a.998.998 0 0 1-.719 1.217A6.996 6.996 0 0 0 4.999 23a1 1 0 0 1-2 0 8.995 8.995 0 0 1 6.75-8.716.999.999 0 0 1 1.218.719Zm12.739 8.704a.997.997 0 0 1-1.414 0l-22-22A.999.999 0 1 1 1.707.293l4.432 4.432C6.726 2.028 9.129 0 12 0c3.309 0 6 2.691 6 6 0 2.871-2.028 5.274-4.725 5.861l10.432 10.432a.999.999 0 0 1 0 1.414ZM8.065 6.651l3.284 3.284c.215.035.432.065.651.065 2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 .218.03.436.065.651Z" />
  </motion.svg>
);
export default SvgUserDelete;
