import * as React from 'react';

import { ForwardRefComponent, SVGMotionProps, motion} from 'framer-motion';

type SvgProps = {
   motionSvg: ForwardRefComponent<SVGSVGElement,SVGMotionProps<SVGSVGElement>>;
  pathSvg: ForwardRefComponent<SVGPathElement,SVGMotionProps<SVGPathElement>>;
}


const SvgBrandsHbo = (props: SvgProps) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="1em" height="1em" viewBox="0 0 24 24" {...props.motionSvg}>
    <motion.path {...props.pathSvg}
      d="M19.084 7.057c-2.707-.002-4.091 1.991-4.432 2.795.005-1.208-1.187-2.633-2.578-2.635H7.589v9.675l4.182.002c1.686 0 2.886-1.462 2.888-2.714.385.789 1.72 2.762 4.428 2.762l-.001.002c2.71-.002 4.916-2.254 4.915-4.965a4.892 4.892 0 0 0-4.917-4.922zM11.42 14.64h-1.33v-1.633h1.332c.387 0 .691.382.691.817-.001.435-.307.816-.693.816zm.004-3.631h-1.33V9.374h1.332c.387 0 .691.382.691.817 0 .436-.306.818-.693.818zm1.771.973h.002c.304-.039.812-.387.991-.61-.063.276-.069 1.073.005 1.35-.206-.315-.689-.702-.998-.74zm5.893 2.462a2.463 2.463 0 1 1 0-4.925 2.463 2.463 0 0 1 0 4.925z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
    <circle
      cx={19.088}
      cy={11.982}
      r={1.936}
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
    <motion.path {...props.pathSvg}
      d="M7.042 16.897H4.413v-3.754H2.708v3.755H.01L0 7.221h2.708v3.6h1.706v-3.6h2.629v9.677zM23.463 7.891c.024 0 .043-.005.056-.016a.052.052 0 0 0 .021-.044v-.002c0-.02-.006-.035-.02-.045s-.032-.015-.055-.015h-.095v.122h.096-.003zm-.17-.188h.172c.05 0 .089.015.117.043.021.02.032.047.032.081v.003a.109.109 0 0 1-.025.076.124.124 0 0 1-.065.041l.104.145h-.088l-.093-.132h-.08v.133h-.073v-.39h-.001zm.148.536a.333.333 0 0 0 .307-.202.359.359 0 0 0 .002-.26.324.324 0 0 0-.288-.201h-.015a.3.3 0 0 0-.13.028.339.339 0 0 0-.106.544.316.316 0 0 0 .23.091zm0 .041a.372.372 0 0 1-.265-.108.38.38 0 0 1-.075-.12.376.376 0 0 1 0-.287.375.375 0 0 1 .196-.196.379.379 0 0 1 .29 0 .371.371 0 0 1-.146.711z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
  </motion.svg>
);
export default SvgBrandsHbo;
