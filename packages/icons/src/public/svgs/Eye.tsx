import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M23.271 9.419C21.72 6.893 18.192 2.655 12 2.655S2.28 6.893.729 9.419a4.91 4.91 0 0 0 0 5.162C2.28 17.107 5.808 21.345 12 21.345s9.72-4.238 11.271-6.764a4.91 4.91 0 0 0 0-5.162m-1.705 4.115C20.234 15.7 17.219 19.345 12 19.345S3.766 15.7 2.434 13.534a2.92 2.92 0 0 1 0-3.068C3.766 8.3 6.781 4.655 12 4.655s8.234 3.641 9.566 5.811a2.92 2.92 0 0 1 0 3.068" />
    <path d="M12 7a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5m0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3" />
  </svg>
);
export default SvgEye;
