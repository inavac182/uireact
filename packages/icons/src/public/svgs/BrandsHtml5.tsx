import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsHtml5 = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M5.081 0h1.078v1.069h.994V0h1.078v3.234H7.153V2.156h-.984v1.078H5.081V0zm4.575 1.078h-.951V0h2.986v1.078h-.956v2.156H9.656V1.078zM12.164 0h1.13l.694 1.139L14.681 0h1.13v3.234h-1.078V1.631l-.755 1.162-.755-1.162v1.603h-1.059V0zm4.181 0h1.078v2.166h1.528v1.069h-2.606V0zM3.497 4.716l1.547 17.362L11.986 24l6.97-1.931 1.547-17.353H3.497zm3.159 3.548h5.334v2.128h-3l.197 2.18h2.803v2.123H7.237l-.581-6.431zM12 14.7h2.616l-.248 2.766-2.368.635V14.7zm5.625 6.253L12 22.523v-2.198l-4.369-1.219-.3-3.342h2.138l.15 1.702 2.377.636-.005.001v2.212l.009-.002 4.35-1.207.586-6.534H12v-2.18h5.128l.197-2.128H12V6.141h6.952l-1.327 14.812z" />
    <motion.path {...props.pathSvg} d="M12 12.572h4.936l-.586 6.534L12 20.313v-2.212l2.367-.635.249-2.766H12zM17.325 8.264l-.197 2.128H12V8.264zM11.991 8.264v2.128H12V8.264h-.009zm0 4.308v2.123H12v-2.123h-.009zm.004 5.53-.005.001v2.212l.01-.002v-2.21l-.005-.001z" />
    <motion.path {...props.pathSvg} d="M11.991 8.264v2.128h5.137l.197-2.128h-5.334zm0 4.308V14.7h2.625l-.248 2.766-2.368.635-.005.001-.005.001v2.212l.01-.002 4.35-1.207.586-6.534h-4.945z" />
  </motion.svg>
);
export default SvgBrandsHtml5;
