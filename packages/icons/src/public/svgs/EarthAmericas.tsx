import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgEarthAmericas = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12c0-1.494.33-2.912.92-4.187l1.666 1.751c.265.278.632.436 1.016.436h1.949c.288 0 .564.114.768.318l.373.373c.198.198.309.466.309.745v.963c0 .385.153.753.425 1.025l1.19 1.19c.247.247.386.582.386.931v2.365c0 .602.488 1.09 1.09 1.09h.213c.425 0 .811-.247.989-.633l2.241-4.856a1.264 1.264 0 0 0-.477-1.601l-2.562-1.601A2.03 2.03 0 0 0 11.419 10H9.988c-.311 0-.61-.124-.83-.344l-.592-.592a.797.797 0 0 1 0-1.128l.529-.529a.797.797 0 0 1 .921-.149l.88.44a.939.939 0 0 0 1.084-.176l.003-.003a.938.938 0 0 0 .141-1.147l-.837-1.396a.886.886 0 0 1 .014-.94c.296-.457.78-1.202 1.316-2.016 3.272.2 6.125 1.98 7.801 4.586l-1.59.917c-.49.282-.733.855-.595 1.403l.627 2.507c.09.36.333.662.665.827l2.373 1.178C21.199 18.273 17.027 22 12.002 22Z" />
  </motion.svg>
);
export default SvgEarthAmericas;
