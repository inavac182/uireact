import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Plaground: (props) => { console.log(props); return <>props.children</>},
    ...components,
  }
}