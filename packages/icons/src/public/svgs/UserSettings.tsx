import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgUserSettings = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M15 6c0-3.309-2.691-6-6-6S3 2.691 3 6s2.691 6 6 6 6-2.691 6-6Zm-6 4c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4Zm-.008 4.938a1 1 0 0 1-.869 1.116A7.006 7.006 0 0 0 1.999 23a1 1 0 0 1-2 0c0-4.531 3.386-8.37 7.876-8.93a1.003 1.003 0 0 1 1.116.869Zm13.704 4.195-.974-.562c.166-.497.278-1.019.278-1.572s-.111-1.075-.278-1.572l.974-.562a1 1 0 0 0-1-1.732l-.973.562A4.972 4.972 0 0 0 18 12.101V11a1 1 0 0 0-2 0v1.101a4.983 4.983 0 0 0-2.723 1.594l-.973-.562a1 1 0 0 0-1 1.732l.974.562c-.166.497-.278 1.019-.278 1.572s.111 1.075.278 1.572l-.974.562a1 1 0 0 0 1 1.732l.973-.562A4.972 4.972 0 0 0 16 21.897v1.101a1 1 0 0 0 2 0v-1.101a4.983 4.983 0 0 0 2.723-1.594l.973.562a.997.997 0 0 0 1.366-.366 1 1 0 0 0-.366-1.366ZM17 19.999c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3Z" />
  </motion.svg>
);
export default SvgUserSettings;
