import type { MDXComponents } from 'mdx/types'

import { UiHeading, UiLink } from '@uireact/text';
import { UiLineSeparator } from '@uireact/separator';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiList, UiListItem } from '@uireact/list';

import Pre from './app/utils/custom-pre'

const headingPadding: UiSpacingProps['padding'] = { top: 'six', bottom: 'five' };

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: Pre,
    h1: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={1}>{children}</UiHeading></UiSpacing>,
    h2: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={2}>{children}</UiHeading></UiSpacing>,
    h3: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={3}>{children}</UiHeading></UiSpacing>,
    h4: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={4}>{children}</UiHeading></UiSpacing>,
    h5: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={5}>{children}</UiHeading></UiSpacing>,
    h6: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={6}>{children}</UiHeading></UiSpacing>,
    hr: UiLineSeparator,
    a: ({ children, href, target }) => {
      return (
        <UiLink>
          <a href={href} target={target}>{children}</a>
        </UiLink>
      )
    },
    ul: UiList,
    li: UiListItem,
    ...components,
  }
}