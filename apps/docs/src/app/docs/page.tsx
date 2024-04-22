import React from 'react';

import Link from 'next/link';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { UiButtonLink, UiHeading, UiLink, UiText } from '@uireact/text';
import { UiLineSeparator } from '@uireact/separator';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiList, UiListItem } from '@uireact/list';

import { InstallationScripts } from './components/installation-scripts';
import { UiIcon } from '@uireact/icons';

const headingSpacing: UiSpacingProps['padding'] = { block: 'four' };
const listSpacing: UiSpacingProps['padding'] = { inline: 'five'};

export default function Docs () {
    return (
        <>
            <UiSpacing padding={headingSpacing}>
                <UiHeading>Welcome to @UiReact docs</UiHeading>
            </UiSpacing>
            <UiLineSeparator />
            <br />
            <UiHeading level={4}>Installation</UiHeading>
            <br />
            <InstallationScripts />
            <br />
            <UiText>Make sure you also install all the peer dependencies:</UiText>
            <br />
            <UiSpacing padding={listSpacing}>
                <UiList type='BULLETED'>
                    <UiListItem>
                        <UiLink>
                            <a href="https://styled-components.com/docs/basics#installation">Styled-components</a>
                        </UiLink>
                    </UiListItem>
                    <UiListItem>
                        <UiLink>
                            <a href="https://www.framer.com/motion/introduction/#install">Framer motion</a>
                        </UiLink>
                    </UiListItem>
                    <UiListItem>
                        <UiLink>
                            <a href="https://react.dev/learn/installation">React</a>
                        </UiLink>
                    </UiListItem>
                </UiList>
            </UiSpacing>
            <br />
            <UiHeading>
                Set up
            </UiHeading>
            <br />
            <UiText>Create a wrapper componen that is used to wrap your views and use the <UiText fontStyle='bold' inline>UiView</UiText> like this:</UiText>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} wrapLines>
            {`
import React from 'react';

import { DefaultTheme } from '@uireact/foundation';
import { UiView } from '@uireact/view';

export const MyWrapper = () => (
  <UiView theme={DefaultTheme} selectedTheme={ThemeColor.light}>
    <p>View content</p>
  </UiView>
);
            `}
            </SyntaxHighlighter>
            <br />
            <UiHeading>
                Theme
            </UiHeading>
            <br />
            <UiText>@UiReact brings a default theme that can be used for your web app, however if you want to customize colors, fonts, sizes, etc... Then you can create your own theme</UiText>
            <br />
            <UiButtonLink coloration='dark'>
                <Link href="/create-theme">
                    Create theme <UiIcon icon="Layers" coloration='dark' />
                </Link>
            </UiButtonLink>
            <br />
        </>
    )
}