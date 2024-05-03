import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgEditCircle = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="1em" height="1em" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10Zm1.379-15.621-5.914 5.914A4.968 4.968 0 0 0 6 15.828V17a1 1 0 0 0 1 1h1.172a4.968 4.968 0 0 0 3.535-1.465l5.914-5.914c1.17-1.17 1.17-3.072 0-4.242s-3.072-1.17-4.242 0Zm-3.086 8.742A3.02 3.02 0 0 1 8.172 16H8v-.172c0-.789.32-1.562.879-2.121l3.457-3.457 1.414 1.414-3.457 3.457Zm5.914-5.914-1.043 1.043-1.414-1.414 1.043-1.043a.999.999 0 1 1 1.414 1.414Z" />
  </motion.svg>
);
export default SvgEditCircle;
