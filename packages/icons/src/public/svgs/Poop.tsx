import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgPoop = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M21.295 14.584A3.466 3.466 0 0 0 22 12.5a3.498 3.498 0 0 0-2.273-3.266C19.899 8.857 20 8.441 20 8c0-1.654-1.346-3-3-3h-.1c-.321-1.719-1.392-3.759-2.864-4.695a1.934 1.934 0 0 0-1.824-.136c-.632.28-1.08.859-1.198 1.548-.343 2-1.532 2.978-1.984 3.283H7C5.346 5 4 6.346 4 8c0 .441.101.857.273 1.234A3.498 3.498 0 0 0 2 12.5c0 .784.268 1.5.705 2.084C1.106 15.419 0 17.074 0 19c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5 0-1.925-1.106-3.581-2.705-4.416ZM19 22H5c-1.654 0-3-1.346-3-3s1.346-3 3-3h7a1 1 0 1 0 0-2H5.5c-.827 0-1.5-.673-1.5-1.5S4.673 11 5.5 11H12a1 1 0 1 0 0-2H7a1.001 1.001 0 0 1 0-2h2.308c.157 0 .312-.037.453-.108.107-.055 2.631-1.372 3.201-4.9 1.129.719 2.039 2.78 2.039 4.009a1 1 0 0 0 1 1h1c.551 0 1 .448 1 1s-.449 1-1 1a1 1 0 0 0 0 2h1.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-1.5a1 1 0 1 0 0 2h2c1.654 0 3 1.346 3 3s-1.346 3-3 3Z" />
  </motion.svg>
);
export default SvgPoop;
