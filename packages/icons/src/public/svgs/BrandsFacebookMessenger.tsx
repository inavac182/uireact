import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  motionPath: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsFacebookMessenger = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.motionPath}
      d="M12 0C5.24 0 0 4.952 0 11.64c0 3.498 1.434 6.522 3.769 8.61a.962.962 0 0 1 .323.684l.065 2.134a.96.96 0 0 0 1.347.849l2.382-1.051a.962.962 0 0 1 .641-.047c1.094.301 2.259.461 3.473.461 6.76 0 12-4.952 12-11.64S18.76 0 12 0zm7.206 8.956-3.525 5.593a1.8 1.8 0 0 1-2.603.48l-2.804-2.103a.719.719 0 0 0-.867.003L5.62 15.802c-.505.383-1.165-.221-.827-.758l3.525-5.593a1.8 1.8 0 0 1 2.603-.48l2.804 2.103a.719.719 0 0 0 .867-.003l3.787-2.873c.506-.383 1.165.221.827.758z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
  </motion.svg>
);
export default SvgBrandsFacebookMessenger;
