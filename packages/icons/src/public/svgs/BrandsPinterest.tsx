import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsPinterest = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M12.01 0C5.388 0 .02 5.368.02 11.99c0 5.082 3.158 9.424 7.618 11.171-.109-.947-.197-2.408.039-3.444.217-.938 1.401-5.961 1.401-5.961s-.355-.72-.355-1.776c0-1.668.967-2.911 2.171-2.911 1.026 0 1.52.77 1.52 1.688 0 1.026-.651 2.566-.997 3.997-.286 1.194.602 2.171 1.776 2.171 2.132 0 3.77-2.25 3.77-5.487 0-2.872-2.062-4.875-5.013-4.875-3.414 0-5.418 2.556-5.418 5.201 0 1.026.395 2.132.888 2.734.1.117.11.226.08.344-.089.375-.296 1.194-.336 1.362-.049.217-.178.266-.405.158-1.5-.701-2.438-2.882-2.438-4.648 0-3.78 2.743-7.253 7.924-7.253 4.155 0 7.391 2.961 7.391 6.928 0 4.135-2.605 7.461-6.217 7.461-1.214 0-2.359-.632-2.743-1.382l-.75 2.852c-.266 1.046-.997 2.349-1.49 3.148 1.126.344 2.311.532 3.554.532 6.622 0 11.99-5.368 11.99-11.99C24 5.368 18.632 0 12.01 0z" />
  </motion.svg>
);
export default SvgBrandsPinterest;
