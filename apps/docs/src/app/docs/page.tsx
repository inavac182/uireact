import React from 'react';

import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { UiButtonLink, UiLink, UiText } from '@uireact/text';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiList, UiListItem } from '@uireact/list';

import { InstallationScripts } from './components/installation-scripts';
import { UiIcon } from '@uireact/icons';
import { UiCard } from '@uireact/card';
import { DocHeading, DocSubHeading } from './components';

const listSpacing: UiSpacingProps['padding'] = { inline: 'five'};

export default function Docs () {
    return (
        <>
            <UiCard styling='outlined' category='warning'>
                <h2><UiIcon icon="Party" category='warning' size='xlarge' /> We just migrated to our new tech stack docs page!</h2>
                <p>There are a few broken links that we are working on fixing. Sorry for the inconvinience, will try to fix it real quickly.</p>
            </UiCard>
            <br />
            <DocHeading>Welcome to @UiReact docs</DocHeading>
            <br />
            <UiText>
                @UiReact is a themed library of react components for react web applications that are built with styled components and framer motion. 
                These components are ready to use 2 colorations for light and dark themes.
            </UiText>
            <br />
            <UiText>
                We also publish a few utils hooks that help to achieve multiple tasks easier in your applications.
            </UiText>
            <br />
            <DocSubHeading>Installation</DocSubHeading>
            <UiText>Select the package manager you will be using:</UiText>
            <br />
            <InstallationScripts />
            <br />
            <UiText>Make sure you also install all the peer dependencies:</UiText>
            <br />
            <UiSpacing padding={listSpacing}>
                <UiList type='BULLETED'>
                    <UiListItem>
                        <UiLink>
                            <a href="https://styled-components.com/docs/basics#installation" target='_blank'>Styled-components</a>
                        </UiLink>
                    </UiListItem>
                    <UiListItem>
                        <UiLink>
                            <a href="https://www.framer.com/motion/introduction/#install" target='_blank'>Framer motion</a>
                        </UiLink>
                    </UiListItem>
                    <UiListItem>
                        <UiLink>
                            <a href="https://react.dev/learn/installation" target='_blank'>React</a>
                        </UiLink>
                    </UiListItem>
                </UiList>
            </UiSpacing>
            <br />
            <UiText size="small">
            We suggest you use <UiLink size="small"><a href="https://nextjs.org/" target="_blank">Next JS</a></UiLink>for your react app.
            They also have a doc page for getting <UiLink size="small"><a href="https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components" target="_blank">💅 styled components set up in Next JS</a></UiLink>.
            </UiText>
            <br />
            <DocSubHeading>Set up</DocSubHeading>
            <br />
            <UiText>Create a wrapper component that is used to wrap your views and use the <UiText fontStyle='bold' inline>UiView</UiText> like this:</UiText>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} wrapLines>
            {`
import React from 'react';

import { DefaultTheme } from '@uireact/foundation';
import { UiView } from '@uireact/view';

export const MyWrapper = ({ children }) => (
  <UiView theme={DefaultTheme} selectedTheme={ThemeColor.light}>
    {children}
  </UiView>
);
            `}
          </SyntaxHighlighter>
            <br />
            <DocSubHeading>Theme</DocSubHeading>
            <br />
            <UiText>@UiReact brings a default theme that can be used for your web app, however if you want to customize colors, fonts, sizes, etc... Then you can create your own theme</UiText>
            <br />
            <UiButtonLink coloration='dark'>
                <Link href="/docs/theme-creation-tool">
                    Create theme <UiIcon icon="Layers" coloration='dark' />
                </Link>
            </UiButtonLink>
            <br />
        </>
    )
}