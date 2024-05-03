import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgEditDocument = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M18.813 10a1 1 0 0 0 .969-1.248 7.004 7.004 0 0 0-1.833-3.217L14.464 2.05A6.954 6.954 0 0 0 9.514 0H4.999A5.005 5.005 0 0 0 0 5v14c0 2.757 2.243 5 5 5h3a1 1 0 0 0 0-2H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h4.515c.163 0 .325.008.485.023V7c0 1.654 1.346 3 3 3h5.813ZM12 7V2.659c.379.218.732.488 1.05.806l3.485 3.485c.314.314.583.668.803 1.05H13c-.551 0-1-.449-1-1Zm11.122 4.879c-1.134-1.134-3.11-1.134-4.243 0l-6.707 6.707A3.976 3.976 0 0 0 11 21.415v1.586a1 1 0 0 0 1 1h1.586a3.973 3.973 0 0 0 2.828-1.172l6.707-6.707c.567-.567.879-1.32.879-2.122s-.312-1.555-.878-2.121Zm-1.415 2.828-6.708 6.707a1.983 1.983 0 0 1-1.414.586h-.586v-.586c0-.534.208-1.036.586-1.414l6.708-6.707a1.023 1.023 0 0 1 1.414 0c.189.188.293.439.293.707s-.104.518-.293.707Z" />
  </motion.svg>
);
export default SvgEditDocument;
