import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsSoundcloud = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg}
      d="m10.069 16.995-.138-2.565.138-6.345a.41.41 0 0 1 .414-.405.41.41 0 0 1 .414.405l.138 6.345-.138 2.565a.41.41 0 0 1-.414.405.41.41 0 0 1-.414-.405zm-1.655 0-.138-2.565.138-4.725a.41.41 0 0 1 .414-.405.41.41 0 0 1 .414.405l.138 4.725-.138 2.565a.41.41 0 0 1-.414.405.41.41 0 0 1-.414-.405zm-1.655 0-.138-2.565.138-5.265a.41.41 0 0 1 .414-.405.41.41 0 0 1 .414.405l.138 5.265-.138 2.565a.41.41 0 0 1-.414.405.41.41 0 0 1-.414-.405zm-1.656 0-.137-2.565.138-4.185a.41.41 0 0 1 .414-.405.41.41 0 0 1 .414.405l.138 4.185-.138 2.565a.41.41 0 0 1-.414.405.41.41 0 0 1-.415-.405zm-1.655 0L3.31 14.43l.138-2.025c0-.224.186-.405.414-.405s.414.181.414.405l.138 2.025-.138 2.565c0 .224-.185.405-.414.405s-.414-.181-.414-.405zm-1.655 0-.138-2.565.138-2.565a.41.41 0 0 1 .414-.405.41.41 0 0 1 .414.405l.138 2.565-.138 2.565a.41.41 0 0 1-.414.405.41.41 0 0 1-.414-.405zm-1.655-1.08L0 14.43l.138-1.485c0-.224.185-.405.414-.405s.414.181.414.405l.138 1.485-.138 1.485c0 .224-.185.405-.414.405s-.414-.181-.414-.405zm19.377-4.784a3.36 3.36 0 0 1 1.175-.211c1.828 0 3.31 1.451 3.31 3.24s-1.482 3.24-3.31 3.24h-8.275a.82.82 0 0 1-.828-.811V7.95c0-1.35 2.483-1.35 2.483-1.35 2.744 0 5.02 1.962 5.445 4.531z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
  </motion.svg>
);
export default SvgBrandsSoundcloud;
