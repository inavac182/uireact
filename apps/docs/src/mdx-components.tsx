import type { MDXComponents } from 'mdx/types'

import { UiHeading, UiLink, UiText } from '@uireact/text';
import { UiLineSeparator } from '@uireact/separator';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiList, UiListItem } from '@uireact/list';

import Pre from './app/utils/custom-pre'
import { DocHeading, DocSubHeading } from './app/docs/components';

const headingPadding: UiSpacingProps['padding'] = { top: 'six', bottom: 'five' };
const componentsPadding: UiSpacingProps['padding'] = { block: 'five' };
const listsPadding: UiSpacingProps['padding'] = { block: 'five', inline: 'five' };
const listsItemsPadding: UiSpacingProps['padding'] = { block: 'three' };

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: Pre,
    h1: ({ children }) => <UiSpacing padding={headingPadding}><DocHeading>{children}</DocHeading></UiSpacing>,
    h2: ({ children }) => <UiSpacing padding={headingPadding}><DocSubHeading>{children}</DocSubHeading></UiSpacing>,
    h3: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={3}>{children}</UiHeading></UiSpacing>,
    h4: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={4}>{children}</UiHeading></UiSpacing>,
    h5: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={5}>{children}</UiHeading></UiSpacing>,
    h6: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={6}>{children}</UiHeading></UiSpacing>,
    hr: UiLineSeparator,
    a: ({ children, href, target }) => {
      return (
        <UiSpacing padding={componentsPadding}>
          <UiLink>
            <a href={href} target={target}>{children}</a>
          </UiLink>
        </UiSpacing>
      )
    },
    ol: ({ children }) => <UiSpacing padding={listsPadding}><UiList type='ORDERED'>{children}</UiList></UiSpacing>,
    ul: ({ children }) => <UiSpacing padding={listsPadding}><UiList type='BULLETED'>{children}</UiList></UiSpacing>,
    p: ({ children }) => <UiSpacing padding={componentsPadding}><UiText>{children}</UiText></UiSpacing>,
    span: ({ children }) => <UiSpacing padding={componentsPadding}><UiText inline>{children}</UiText></UiSpacing>,
    li: ({ children }) => <UiSpacing padding={listsItemsPadding}><UiListItem>{children}</UiListItem></UiSpacing>,
    ...components,
  }
}