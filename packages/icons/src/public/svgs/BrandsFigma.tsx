import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsFigma = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M18.312 8.245a4.491 4.491 0 0 0 2.031-3.755A4.496 4.496 0 0 0 15.852 0H8.148a4.496 4.496 0 0 0-4.491 4.49c0 1.568.809 2.952 2.031 3.755-1.222.803-2.031 2.187-2.031 3.755s.809 2.952 2.031 3.755a4.488 4.488 0 0 0-2.031 3.755c0 2.476 2.025 4.49 4.515 4.49 2.516 0 4.564-2.036 4.564-4.539V15.32a4.47 4.47 0 0 0 3.019 1.17h.097A4.496 4.496 0 0 0 20.343 12a4.491 4.491 0 0 0-2.031-3.755zm-5.577-6.774h3.117c1.665 0 3.02 1.354 3.02 3.019s-1.355 3.02-3.02 3.02h-3.117V1.471zM5.128 4.49a3.023 3.023 0 0 1 3.02-3.019h3.117V7.51H8.148a3.024 3.024 0 0 1-3.02-3.02zm0 7.51a3.023 3.023 0 0 1 3.02-3.019h3.117v6.039H8.129A3.025 3.025 0 0 1 5.128 12zm6.137 7.461c0 1.692-1.388 3.068-3.093 3.068-1.678 0-3.044-1.354-3.044-3.019s1.355-3.02 3.02-3.02h3.117v2.971zm4.587-4.441h-.097c-1.665 0-3.019-1.355-3.019-3.02s1.354-3.019 3.019-3.019h.097c1.665 0 3.02 1.354 3.02 3.019s-1.355 3.02-3.02 3.02zM8.148 15.019h-.019 3.136-3.117z" />
  </motion.svg>
);
export default SvgBrandsFigma;
