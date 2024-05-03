import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsBluetooth = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M19.704 23.004h.174a.235.235 0 0 0 .161-.05.176.176 0 0 0 .061-.14c0-.126-.08-.195-.222-.195h-.174v.385zm.36.494-.222-.393h-.138v.404h-.128v-.979h.331a.362.362 0 0 1 .13.021.352.352 0 0 1 .103.063.31.31 0 0 1 .067.094.254.254 0 0 1 .025.115.27.27 0 0 1-.059.172.29.29 0 0 1-.151.105l-.042.015.23.395-.146-.012zm-.209-1.291a.814.814 0 0 0-.312.061.802.802 0 0 0-.42.429.872.872 0 0 0 0 .628.792.792 0 0 0 .42.429.788.788 0 0 0 1.042-.429.872.872 0 0 0 0-.628.802.802 0 0 0-.42-.429.808.808 0 0 0-.31-.061m0 1.739a.901.901 0 0 1-.362-.073.935.935 0 0 1-.293-.209.943.943 0 0 1-.209-.295.923.923 0 0 1 0-.722.95.95 0 0 1 .492-.496.9.9 0 0 1 .362-.071.926.926 0 0 1 .364.071.977.977 0 0 1 .295.209c.087.085.158.185.209.295a.923.923 0 0 1 0 .722.977.977 0 0 1-.209.295.91.91 0 0 1-.649.274" />
    <motion.path {...props.pathSvg} d="M12 24c5.231 0 8.851-2.49 8.851-12S17.242 0 12 0 3.149 2.49 3.149 12 6.769 24 12 24m-1.149-12L6.56 7.7l1.243-1.255 3.421 3.429V1.682l6.217 6.214L13.335 12l4.105 4.103-6.214 6.214v-8.192l-3.411 3.419-1.243-1.255L10.851 12zm2.12 6.068 1.984-1.986-1.984-1.982v3.968zm0-12.149 1.984 1.986-1.984 1.982V5.919z" />
  </motion.svg>
);
export default SvgBrandsBluetooth;
