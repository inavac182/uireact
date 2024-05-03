import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsTypescript = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M21.656 0H2.344A2.345 2.345 0 0 0 0 2.344v19.312A2.345 2.345 0 0 0 2.344 24h19.312A2.345 2.345 0 0 0 24 21.656V2.344A2.345 2.345 0 0 0 21.656 0zm-7.734 13.316h-3.01v8.574H8.527v-8.574H5.531V11.39h8.391v1.926zm7.776 7.054c-.467.835-1.325 1.305-2.238 1.5-1.06.226-2.187.214-3.25.015a4.955 4.955 0 0 1-1.353-.44v-2.347a4.507 4.507 0 0 0 2.898 1.071c.45 0 .951-.056 1.339-.304.266-.17.444-.438.444-.759 0-.437-.316-.767-.657-.997-.499-.336-1.072-.555-1.625-.785-.822-.342-1.434-.76-1.838-1.254-.702-.859-.817-2.231-.275-3.201.463-.828 1.316-1.316 2.216-1.533.981-.236 2.046-.236 3.041-.081a5.72 5.72 0 0 1 1.17.304v2.193a3.48 3.48 0 0 0-.576-.322 4.767 4.767 0 0 0-1.298-.367c-.445-.06-.914-.07-1.353.033-.346.08-.71.241-.91.55a.793.793 0 0 0-.125.436c0 .176.046.334.139.473.235.353.649.58 1.02.763.652.32 1.336.56 1.962.931.608.359 1.148.859 1.412 1.525.127.32.191.693.191 1.118-.001.587-.112 1.08-.334 1.478z" />
  </motion.svg>
);
export default SvgBrandsTypescript;
