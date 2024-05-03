import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgWarningDiamond = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="Layer 1" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="m22.536 8.46-6.999-7.001c-.945-.944-2.2-1.465-3.536-1.465S9.409.515 8.465 1.459L1.466 8.46a5.004 5.004 0 0 0 0 7.069l6.999 7.001c.944.944 2.2 1.465 3.536 1.465s2.591-.521 3.536-1.465l6.999-7.001C23.48 14.585 24 13.33 24 11.995s-.52-2.591-1.464-3.535Zm-1.414 5.655-6.999 7.001c-1.134 1.133-3.11 1.133-4.244 0L2.88 14.115a3.003 3.003 0 0 1 0-4.241l6.999-7.001c.567-.566 1.32-.879 2.122-.879s1.555.312 2.122.879l6.999 7.001c.566.566.878 1.319.878 2.121s-.312 1.554-.878 2.12ZM13.5 16.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001Zm-2.5-4V7a1 1 0 1 1 2 0v5.5a1 1 0 1 1-2 0Z" />
  </motion.svg>
);
export default SvgWarningDiamond;
