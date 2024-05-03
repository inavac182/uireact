import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgDownloadCloud = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M17.974 7.146a1.028 1.028 0 0 1-.742-.569c-1.552-3.271-5.143-5.1-8.735-4.438A7.946 7.946 0 0 0 2.113 8.64a8.13 8.13 0 0 0 .033 2.89c.06.309-.073.653-.346.901a5.51 5.51 0 0 0-1.801 4.07c0 3.032 2.467 5.5 5.5 5.5h11c4.136 0 7.5-3.364 7.5-7.5 0-3.565-2.534-6.658-6.026-7.354ZM16.5 20h-11C3.57 20 2 18.43 2 16.5a3.51 3.51 0 0 1 1.146-2.59c.786-.715 1.155-1.773.963-2.763a6.142 6.142 0 0 1-.024-2.181c.403-2.422 2.365-4.421 4.771-4.862A6.4 6.4 0 0 1 10.001 4a5.95 5.95 0 0 1 5.422 3.434 3.018 3.018 0 0 0 2.158 1.673 5.51 5.51 0 0 1 4.417 5.394c0 3.032-2.467 5.5-5.5 5.5Zm-1.379-6.707a.999.999 0 0 1 0 1.414l-2.707 2.707a1.993 1.993 0 0 1-1.405.584L11 18l-.009-.002a1.993 1.993 0 0 1-1.405-.584l-2.707-2.707a.999.999 0 1 1 1.414-1.414L10 15v-5a1 1 0 1 1 2 0v5l1.707-1.707a.999.999 0 0 1 1.414 0Z" />
  </motion.svg>
);
export default SvgDownloadCloud;
