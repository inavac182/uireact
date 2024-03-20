import type { MDXComponents } from 'mdx/types'
import Pre from './app/utils/custom-pre'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: Pre,
    ...components,
  }
}