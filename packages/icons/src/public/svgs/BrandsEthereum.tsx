import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsEthereum = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg}
      d="m19.364 12.225-7.365 4.352-7.368-4.352L11.999 0z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
    <motion.path {...props.pathSvg}
      d="M19.369 13.62 11.999 24 4.631 13.62l7.368 4.353z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
  </motion.svg>
);
export default SvgBrandsEthereum;
