import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsAmericanExpress = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="M12.342 4.828h-2.36l-2.965 6.716h2.015l.556-1.343h3.09l.566 1.343h2.063l-2.965-6.716zm-2.121 3.866.912-2.197.911 2.197h-1.823zM15.307 17.681v1.554H9.589v-6.716h5.718v1.554h-3.885v1.046h3.79v1.516h-3.79v1.046zM20.815 15.858 24 19.235h-2.408l-1.967-2.168-1.976 2.168h-2.342l3.167-3.358-3.167-3.358h2.409l1.948 2.149 1.967-2.149H24z" />
    <motion.path {...props.motionPath} d="M22.156 15.86 24 13.915v3.908zM21.179 4.828H24v6.716h-1.814V6.833l-1.727 4.711h-1.611L17.12 6.842v4.702h-1.813V4.828h2.869l1.497 4.183z" />
    <motion.path {...props.motionPath} d="M24 0v3.866h-3.537l-.797 2.232-.792-2.232h-4.562v2.963l-1.316-2.963H9.31l-3.822 8.649h3.081v7.682h9.547l1.498-1.648 1.491 1.648H24V24H0V0z" />
  </motion.svg>
);
export default SvgBrandsAmericanExpress;
