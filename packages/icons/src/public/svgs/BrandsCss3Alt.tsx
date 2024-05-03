import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsCss3Alt = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath} d="m3.498 4.717 1.547 17.356L11.99 24l6.963-1.93 1.549-17.353H3.498zm3.164 3.547h5.33v2.129H6.855l-.193-2.129zM12 14.701h2.614l-.247 2.761-2.367.639v-3.4zm0-2.128v-2.18h2.992l-.194 2.18H12zm-4.954 0h4.947v2.129H7.237l-.191-2.129zm10.58 8.392L12 22.525v-2.209l-.01.003-4.36-1.211-.298-3.342h2.137l.152 1.698 2.37.64h.002v2.214l.007-.002 4.357-1.208.968-10.844H12V6.135h6.95l-1.324 14.83z" />
    <motion.path {...props.motionPath} d="m17.325 8.264-.968 10.844L12 20.315v-2.214l2.367-.639.247-2.761H12v-2.128h2.798l.194-2.18H12V8.264zM11.993 12.573H12v2.129h-.007zM11.993 8.264H12v2.129h-.007zM11.992 18.102H12v2.214h-.008zM7.5 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.5V0zM10.594 0h2.578v.938h-1.5v.188h1.5v2.156h-2.578v-.985h1.5v-.188h-1.5V0zM13.687 0h2.578v.938h-1.5v.188h1.5v2.156h-2.578v-.985h1.5v-.188h-1.5V0z" />
    <motion.path {...props.motionPath} d="m17.325 8.264-.968 10.844L12 20.315l-.007.002v-2.214l.007-.002 2.367-.639.247-2.761h-2.621v-2.128h2.805l.194-2.18h-2.999V8.264z" />
  </motion.svg>
);
export default SvgBrandsCss3Alt;
