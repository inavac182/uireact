import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsMicrosoftExplorer = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M23.993 12.598c-.027-1.91-.494-3.707-1.348-5.28C26.352-.995 18.867.125 18.264.24c-1.573.315-3.146.82-4.494 1.46-5.168-.061-9.662 2.697-11.122 8.427 2.696-3.033 4.606-4.269 5.73-4.718-.237.213-.473.437-.709.662-1.797 1.797-3.258 3.595-4.494 5.505-.955 1.685-2.022 3.146-2.584 5.055-3.033 11.01 6.516 6.404 7.864 5.617 1.46.719 3.033 1.112 4.831 1.112 4.718 0 8.763-3.033 10.223-7.19h-5.73c-2.696 4.269-9.1 2.359-9.325-2.247h15.503c.061-.46.041-.993.036-1.325zm-1.629-5.729c-1.236-2.022-3.033-3.595-5.28-4.381 1-.483 3.558-1.457 4.943-.562 1.04.672 1.491 1.99.337 4.943zM2.086 22.26c-.794-.721-.899-2.696.786-6.179a10.636 10.636 0 0 0 4.718 5.73c-1.089.595-3.977 1.836-5.504.449zm6.291-11.235c.087-2.472 2.247-4.494 4.943-4.494s4.831 2.022 4.943 4.494H8.377z" />
  </motion.svg>
);
export default SvgBrandsMicrosoftExplorer;
