import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgVolumeMute = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M13.644.418a1.003 1.003 0 0 0-.821-.215C9.822.758 7.069 2.505 5.269 4.997h-.271a5.007 5.007 0 0 0-5 5.001v4.005c0 2.757 2.243 5 5 5h.271c1.802 2.495 4.555 4.243 7.554 4.794a1.004 1.004 0 0 0 .821-.214c.228-.19.36-.472.36-.769V1.187a.998.998 0 0 0-.36-.769Zm-1.64 21.117a10.138 10.138 0 0 1-5.113-3.703l-.299-.415a1 1 0 0 0-.811-.415h-.782c-1.654 0-3-1.346-3-3V9.997c0-1.654 1.346-3 3-3h.782a1 1 0 0 0 .811-.415l.299-.415a10.154 10.154 0 0 1 5.114-3.702v19.068Zm11.729-7.242a.999.999 0 1 1-1.414 1.414l-2.293-2.293-2.293 2.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L18.612 12l-2.293-2.293a.999.999 0 1 1 1.414-1.414l2.293 2.293 2.293-2.293a.999.999 0 1 1 1.414 1.414L21.44 12l2.293 2.293Z" />
  </motion.svg>
);
export default SvgVolumeMute;
