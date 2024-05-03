import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgTypingUnregularCircle = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M13.5 12a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 13.5 12Zm3.5-1.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 17 10.5Zm-10 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 7 10.5Zm17 1.84V19c0 2.757-2.243 5-5 5h-5.917C6.082 24 .47 19.208.03 12.854c-.241-3.476 1.027-6.878 3.479-9.333S9.363-.206 12.836.029C19.096.454 24 5.862 24 12.341Zm-2 0c0-5.431-4.084-9.962-9.299-10.316a10.015 10.015 0 0 0-7.777 2.91 10.019 10.019 0 0 0-2.899 7.782c.373 5.38 5.024 9.285 11.059 9.285h5.917c1.654 0 3-1.346 3-3v-6.66Z" />
  </motion.svg>
);
export default SvgTypingUnregularCircle;
