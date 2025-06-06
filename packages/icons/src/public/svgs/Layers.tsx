import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M22.485 10.975 12 17.267 1.515 10.975A1 1 0 1 0 .486 12.69l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 1 0-1.029-1.715Z" />
    <path d="M22.485 15.543 12 21.834 1.515 15.543a1 1 0 1 0-1.029 1.715l11 6.6a1 1 0 0 0 1.03 0l11-6.6a1 1 0 1 0-1.029-1.715ZM12 14.773a3 3 0 0 1-1.531-.425L.485 8.357a1 1 0 0 1 0-1.714L10.469.652a2.97 2.97 0 0 1 3.062 0l9.984 5.991a1 1 0 0 1 0 1.714l-9.984 5.991a3 3 0 0 1-1.531.425M2.944 7.5l8.556 5.133a.97.97 0 0 0 1 0L21.056 7.5 12.5 2.367a.97.97 0 0 0-1 0Z" />
  </svg>
);
export default SvgLayers;
