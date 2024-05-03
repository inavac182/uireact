import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgVideoCameraVintage = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M22.575 10.152a2.304 2.304 0 0 0-2.517.5l-.438.438a5.034 5.034 0 0 0-2.189-2.458 4.986 4.986 0 0 0 1.568-3.633c0-2.757-2.243-5-5-5a4.997 4.997 0 0 0-4 2.003 4.994 4.994 0 0 0-4-2.003A5.007 5.007 0 0 0 1 5c0 1.429.603 2.721 1.568 3.633A5.004 5.004 0 0 0 0 13v6c0 2.757 2.243 5 5 5h10a5.008 5.008 0 0 0 4.621-3.09l.438.438a2.303 2.303 0 0 0 2.516.501A2.3 2.3 0 0 0 24 19.716v-7.429c0-.938-.56-1.775-1.425-2.133ZM14 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3ZM6 2c1.654 0 3 1.346 3 3S7.654 8 6 8 3 6.654 3 5s1.346-3 3-3Zm12 17c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3v-6c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v6Zm4 .714c0 .171-.104.25-.191.286a.29.29 0 0 1-.337-.067L20 18.461v-4.922l1.472-1.472a.29.29 0 0 1 .337-.067.291.291 0 0 1 .191.286v7.429Z" />
  </motion.svg>
);
export default SvgVideoCameraVintage;
