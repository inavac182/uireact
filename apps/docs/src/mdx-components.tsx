import type { MDXComponents } from 'mdx/types'

import { UiHeading, UiLink, UiText } from '@uireact/text';

import Pre from './app/utils/custom-pre'
import { UiLineSeparator } from '@uireact/separator';
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: Pre,
    h1: ({ children }) => <UiHeading level={1}>{children}</UiHeading>,
    h2: ({ children }) => <UiHeading level={2}>{children}</UiHeading>,
    h3: ({ children }) => <UiHeading level={3}>{children}</UiHeading>,
    h4: ({ children }) => <UiHeading level={4}>{children}</UiHeading>,
    h5: ({ children }) => <UiHeading level={5}>{children}</UiHeading>,
    h6: ({ children }) => <UiHeading level={6}>{children}</UiHeading>,
    hr: UiLineSeparator,
    a: ({ children, href, target }) => {
      return (
        <UiLink>
          <a href={href} target={target}>{children}</a>
        </UiLink>
      )
    },
    p: UiText,
    ...components,
  }
}