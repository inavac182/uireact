import type { MDXComponents } from 'mdx/types'

import Link from 'next/link';

import { UiHeading, UiLink, UiText } from '@uireact/text';
import { UiLineSeparator } from '@uireact/separator';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiList, UiListItem } from '@uireact/list';

import Pre from './app/internal/custom-pre'
import { DocHeading, DocSubHeading } from './app/docs/components';
import { CustomBlockquote } from './app/internal/custom-blockquote-card';
import { CustomTr } from './app/internal/custom-tr';

const headingPadding: UiSpacingProps['padding'] = { block: 'five' };
const componentsPadding: UiSpacingProps['padding'] = { block: 'four' };
const listsPadding: UiSpacingProps['padding'] = { block: 'five', inline: 'five' };
const listsItemsPadding: UiSpacingProps['padding'] = { block: 'three' };

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    blockquote: ({ children }) => <UiSpacing padding={componentsPadding}><CustomBlockquote>{children}</CustomBlockquote></UiSpacing>,
    pre: Pre,
    h1: ({ children }) => <DocHeading>{children}</DocHeading>,
    h2: ({ children }) => <DocSubHeading>{children}</DocSubHeading>,
    h3: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={3}>{children}</UiHeading></UiSpacing>,
    h4: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={4}>{children}</UiHeading></UiSpacing>,
    h5: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={5}>{children}</UiHeading></UiSpacing>,
    h6: ({ children }) => <UiSpacing padding={headingPadding}><UiHeading level={6}>{children}</UiHeading></UiSpacing>,
    hr: UiLineSeparator,
    a: ({ children, href, target }) => {
      return (
          <UiLink>
            <Link href={href || ''} target={target}>{children}</Link>
          </UiLink>
      )
    },
    ol: ({ children }) => <UiSpacing padding={listsPadding}><UiList type='ORDERED'>{children}</UiList></UiSpacing>,
    ul: ({ children }) => <UiSpacing padding={listsPadding}><UiList type='BULLETED'>{children}</UiList></UiSpacing>,
    p: ({ children }) => <UiSpacing padding={componentsPadding}><UiText>{children}</UiText></UiSpacing>,
    span: ({ children }) => <UiSpacing padding={componentsPadding} inline><UiText inline>{children}</UiText></UiSpacing>,
    li: ({ children }) => <UiSpacing padding={listsItemsPadding}><UiListItem>{children}</UiListItem></UiSpacing>,
    tr: ({children}) => <CustomTr>{children}</CustomTr>,
    ...components,
  }
}