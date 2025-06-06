import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingCartAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <circle cx={7} cy={22} r={2} />
    <circle cx={17} cy={22} r={2} />
    <path d="M23 3h-2V1a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0V5h2a1 1 0 0 0 0-2" />
    <path d="M21.771 9.726a.994.994 0 0 0-1.162.806A3 3 0 0 1 17.657 13H5.418l-.94-8H13a1 1 0 0 0 0-2H4.242L4.2 2.648A3 3 0 0 0 1.222 0H1a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.557 19H19a1 1 0 0 0 0-2H8.557a3 3 0 0 1-2.829-2h11.929a5 5 0 0 0 4.921-4.112 1 1 0 0 0-.807-1.162" />
  </svg>
);
export default SvgShoppingCartAdd;
