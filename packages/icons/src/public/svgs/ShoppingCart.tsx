import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgShoppingCart = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M23.32 4.1C22.75 3.4 21.9 3 21 3H7.24l-.04-.35A3.004 3.004 0 0 0 4.22 0H3c-.55 0-1 .45-1 1s.45 1 1 1h1.22c.51 0 .93.38.99.88l1.38 11.7C6.89 17.1 9.02 19 11.56 19H20c.55 0 1-.45 1-1s-.45-1-1-1h-8.44c-1.29 0-2.41-.82-2.83-2h9.43c2.38 0 4.44-1.69 4.9-4.02l.88-4.39a2.99 2.99 0 0 0-.62-2.49Zm-1.34 2.1-.88 4.39A3.007 3.007 0 0 1 18.16 13H8.42l-.94-8H21c.3 0 .58.13.77.37.19.23.27.54.21.83ZM11 22c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm9 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2ZM0 6c0-.55.45-1 1-1h1.54c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1Zm0 4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1Zm5 4c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1Z" />
  </motion.svg>
);
export default SvgShoppingCart;
