import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsJava = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg} d="M5.566 14.276c0-.664 2.521-1.037 3.694-1.128l.112.065c-.451.082-2.26.401-2.26.817 0 .453 2.775.75 4.385.75 2.735 0 4.595-.414 5.095-.55l.7.407c-.479.235-2.536.849-5.795.849-3.621 0-5.931-.708-5.931-1.21zm5.519 9.328a28.5 28.5 0 0 1-4.655-.353l-.137.078c1.467.43 3.509.69 5.752.67 4.406-.038 7.978-1.131 8.048-2.446l-.051-.03c-.295.361-2.2 2.022-8.957 2.081zm.375-.847c3.606-.032 7.641-.737 7.63-1.923-.002-.215-.142-.363-.264-.451l-.059.034c-.333.919-3.15 1.598-7.313 1.634-2.686.024-6.406-.62-6.413-1.363-.006-.746 1.763-1.155 1.763-1.155l-.125-.073c-1.185.163-3.37.731-3.363 1.551.01 1.185 5.03 1.773 8.144 1.746zm8.124-8.164c-.073 1.391-1.358 2.258-2.643 2.989l.116.067c1.371-.386 3.817-1.509 3.615-3.235-.101-.86-.888-1.476-1.913-1.476-.32 0-.604.056-.834.126l-.001.002-.049.122c.918-.177 1.756.493 1.709 1.405zM8.991 18.727c-.418.083-1.33.293-1.33.736 0 .614 1.951 1.085 3.835 1.085 2.592 0 3.654-.667 3.702-.702l-1.078-.624c-.458.109-1.231.28-2.621.28-1.552 0-2.563-.265-2.563-.556 0-.062.039-.135.11-.189l-.055-.03zm6.368-2.071c-.596.169-1.939.444-3.859.444-1.884 0-3.424-.322-3.429-.702-.004-.253.302-.363.302-.363l-.054-.031c-.903.159-1.741.406-1.736.775.008.67 2.57 1.172 4.913 1.172 1.992 0 3.905-.334 4.768-.772l-.905-.523z" />
    <motion.path {...props.pathSvg} d="M14.845 1.717c0 3.693-5.06 5.106-5.06 7.731 0 1.843 1.222 2.999 1.899 3.73l-.055.032c-.854-.534-3.1-1.876-3.1-4.093 0-3.112 5.813-4.599 5.813-8.134 0-.435-.064-.769-.11-.948L14.29 0c.184.231.555.81.555 1.717zm1.664 3.27-.061-.035c-1.101.369-4.491 1.707-4.491 4.202 0 1.411 1.378 2.193 1.378 3.516 0 .472-.267.915-.483 1.179l.109.063c.574-.373 1.589-1.18 1.589-2.222 0-.883-1.221-1.943-1.221-3.078-.001-1.787 2.356-3.189 3.18-3.625z" />
  </motion.svg>
);
export default SvgBrandsJava;
