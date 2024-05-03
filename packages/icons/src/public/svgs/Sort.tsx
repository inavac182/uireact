import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgSort = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M18.873 11.021H5.127a2.126 2.126 0 0 1-1.568-3.56L10.046.872a2.669 2.669 0 0 1 3.939.034l6.431 6.528a2.126 2.126 0 0 1-1.543 3.587ZM5.011 8.837a.115.115 0 0 0 0 .109.111.111 0 0 0 .114.075h13.748a.111.111 0 0 0 .114-.075.109.109 0 0 0-.022-.135l-6.437-6.535A.7.7 0 0 0 12 2.021a.664.664 0 0 0-.5.221L5.01 8.838ZM12 24.011a2.667 2.667 0 0 1-1.985-.887L3.584 16.6a2.125 2.125 0 0 1 1.543-3.586h13.746a2.125 2.125 0 0 1 1.568 3.558l-6.487 6.589a2.641 2.641 0 0 1-1.954.85Zm-6.873-9a.125.125 0 0 0-.092.209l6.437 6.534a.7.7 0 0 0 .528.257.665.665 0 0 0 .5-.223l6.493-6.6a.112.112 0 0 0 0-.108.111.111 0 0 0-.114-.074Z" />
  </motion.svg>
);
export default SvgSort;
