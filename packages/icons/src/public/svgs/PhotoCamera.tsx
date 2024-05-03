import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgPhotoCamera = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M19 0h-5.171c-.801 0-1.555.312-2.122.879L9.879 2.707A.998.998 0 0 1 9.171 3H7V2a1 1 0 1 0-2 0v1C2.243 3 0 5.243 0 8v11c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5ZM5 5h4.171c.801 0 1.555-.312 2.122-.879l1.828-1.828A.998.998 0 0 1 13.829 2H19c1.654 0 3 1.346 3 3v7h-4.084C17.439 9.166 14.968 7 12 7s-5.439 2.166-5.916 5H2V8c0-1.654 1.346-3 3-3Zm11 8c0 2.206-1.794 4-4 4s-4-1.794-4-4 1.794-4 4-4 4 1.794 4 4Zm3 9H5c-1.654 0-3-1.346-3-3v-5h4.084c.477 2.834 2.948 5 5.916 5s5.439-2.166 5.916-5H22v5c0 1.654-1.346 3-3 3Z" />
  </motion.svg>
);
export default SvgPhotoCamera;
