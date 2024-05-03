import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgAlien = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12 0C6.486 0 2 4.432 2 9.88c0 5.184 4.58 10.39 7.311 13.033.754.729 1.722 1.094 2.689 1.094s1.936-.365 2.689-1.094C17.419 20.27 22 15.064 22 9.88 22 4.432 17.514 0 12 0Zm1.299 21.475a1.862 1.862 0 0 1-2.598 0C8.199 19.053 4 14.326 4 9.88 4 5.535 7.589 2 12 2s8 3.535 8 7.88c0 4.446-4.199 9.173-6.701 11.595Zm4.699-12.362c-.054.905-.27 2.152-1.002 2.883-.732.732-1.978.948-2.883 1.002a1.05 1.05 0 0 1-1.111-1.111c.054-.905.27-2.152 1.002-2.883.732-.732 1.978-.948 2.883-1.002a1.05 1.05 0 0 1 1.111 1.111Zm-7 2.775a1.05 1.05 0 0 1-1.111 1.111c-.905-.054-2.152-.27-2.883-1.002-.732-.732-.948-1.978-1.002-2.883a1.05 1.05 0 0 1 1.111-1.111c.905.054 2.152.27 2.883 1.002.732.732.948 1.978 1.002 2.883Z" />
  </motion.svg>
);
export default SvgAlien;
