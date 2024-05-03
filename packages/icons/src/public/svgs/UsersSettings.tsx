import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgUsersSettings = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M5.5 7C7.43 7 9 5.43 9 3.5S7.43 0 5.5 0 2 1.57 2 3.5 3.57 7 5.5 7Zm0-5C6.327 2 7 2.673 7 3.5S6.327 5 5.5 5 4 4.327 4 3.5 4.673 2 5.5 2Zm4.5 8a1.502 1.502 0 0 0-1.201 2.399A1 1 0 1 1 7.2 13.601a3.473 3.473 0 0 1-.701-2.101c0-1.93 1.57-3.5 3.5-3.5a3.52 3.52 0 0 1 2.8 1.399A1 1 0 0 1 11.2 10.6a1.487 1.487 0 0 0-1.2-.601Zm4.5-3C16.43 7 18 5.43 18 3.5S16.43 0 14.5 0 11 1.57 11 3.5 12.57 7 14.5 7Zm0-5c.827 0 1.5.673 1.5 1.5S15.327 5 14.5 5 13 4.327 13 3.5 13.673 2 14.5 2Zm8.196 17.134-.974-.562c.166-.497.278-1.019.278-1.572s-.111-1.075-.278-1.572l.974-.562a1 1 0 0 0-1-1.732l-.973.562A4.972 4.972 0 0 0 18 12.102v-1.101a1 1 0 0 0-2 0v1.101a4.983 4.983 0 0 0-2.723 1.594l-.973-.562a1 1 0 0 0-1 1.732l.974.562C12.112 15.925 12 16.447 12 17s.111 1.075.278 1.572l-.974.562a1 1 0 0 0 1 1.732l.973-.562A4.972 4.972 0 0 0 16 21.898v1.101a1 1 0 0 0 2 0v-1.101a4.983 4.983 0 0 0 2.723-1.594l.973.562a.997.997 0 0 0 1.366-.366 1 1 0 0 0-.366-1.366ZM17 20c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3ZM5 10c-1.654 0-3 1.346-3 3a1 1 0 0 1-2 0c0-2.757 2.243-5 5-5a1 1 0 0 1 0 2Zm5 7a1 1 0 0 1-1 1c-1.654 0-3 1.346-3 3a1 1 0 0 1-2 0c0-2.757 2.243-5 5-5a1 1 0 0 1 1 1Z" />
  </motion.svg>
);
export default SvgUsersSettings;
