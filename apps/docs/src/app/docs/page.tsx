'use client';
import React from 'react';

import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { UiButtonLink, UiHeading, UiLink, UiText } from '@uireact/text';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiList, UiListItem } from '@uireact/list';
import { UiIcon } from '@uireact/icons';
import { UiCard } from '@uireact/card';

import { InstallationScripts } from './components/installation-scripts';
import { DocHeading, DocSubHeading } from './components';
import { ScriptCard } from '../internal';
import { UiReactViewDancing } from '@uireact/framer-animations';

const listSpacing: UiSpacingProps['padding'] = { inline: 'five'};
const contentSpacing: UiSpacingProps['padding'] = { block: 'six' };

export default function Docs () {
    return (
        <>
            <UiCard styling='outlined' category='tertiary'>
                <h2><UiIcon icon="Party" category='tertiary' size='xlarge' motion={UiReactViewDancing} /> V3 is here!</h2>
                <br />
                <h3>We just moved aways from styles-components into SCSS modules.</h3>
                <br/>
                <p>
                    CSS-in-JS has its own limitations, it was good while it lasted, now looking into the future, providing a solution
                    that plays better with Remix and NextJS server components seems a step forward.
                </p>
            </UiCard>
            <br />
            <DocHeading>Welcome to @UiReact docs</DocHeading>
            <br />
            <UiText>
                @UiReact is a themed library of react components for react web applications that are built with SCSS and framer motion. 
                These components are ready to use 2 colorations for light and dark themes.
            </UiText>
            <br />
            <UiText>
                There are also a few tools exported from this library that will help your React development.
            </UiText>
            <br />
            <DocSubHeading>Installation</DocSubHeading>

            <UiSpacing padding={contentSpacing}>
                <UiHeading>Automatic setup ✨</UiHeading>
                <UiText fontStyle="bold">
                    This is the suggested approach for brand new projects:
                </UiText>
                <br />
                <UiText fontStyle="bold">Next JS</UiText>
                <ScriptCard script="npx @uireact/create-next-app@latest" />
                <br />
                <UiText fontStyle="bold">Remix</UiText>
                <ScriptCard script="npx @uireact/create-remix-app@latest" />
                <br />
                <UiText size="small">
                    This script will generate a working project with everything you need set up in the folder you execute it.
                </UiText>
            </UiSpacing>

            <UiSpacing padding={contentSpacing}>
                <UiHeading>Manual setup 🛠️</UiHeading>
            </UiSpacing>
            <UiText>Select the package manager you will be using:</UiText>
            <br />
            <InstallationScripts />
            <br />
            <UiText>Make sure you also install the peer dependencies used throutout the library:</UiText>
            <br />
            <UiSpacing padding={listSpacing}>
                <UiList type='BULLETED'>
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
                We suggest you use <UiLink size="small"><a href="https://nextjs.org/" target="_blank">Next JS</a></UiLink> or 
                <UiLink size="small"><a href="https://remix.run/" target="_blank">Remix</a></UiLink> for your react app. The both have
                They both have natively support for CSS imports so integration is very simple.
            </UiText>
            <br />
            <DocSubHeading>Set up</DocSubHeading>
            <UiText>Create a wrapper component that is used to wrap your views and use the <UiText fontStyle='bold' inline>UiView</UiText> like this:</UiText>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} wrapLines>
            {`
import React from 'react';

import { UiView } from '@uireact/view';

export const MyWrapper = ({ children }) => (
  <UiView selectedTheme={ThemeColor.light}>
    {children}
  </UiView>
);
            `}
          </SyntaxHighlighter>
          <br />
          <h3>Include style files to your global CSS file</h3>
          <UiSpacing padding={contentSpacing}>
            <UiText>
              @uireact provides with a <UiLink><a href="https://github.com/inavac182/uireact/blob/main/packages/foundation/src/default-theme.scss">default theme</a></UiLink> so you can use it or create your own.
              </UiText>
            <br />
            <UiText>
              Import the foundation css file which holds the default theme and all styles from all packages into your global styles file:
            </UiText>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} wrapLines>
            {`
  // In CSS: Update the route based on your project.
  @import url('../node_modules/@uireact/foundation/dist/index.css'); 

  // Include all packages styles
  @import url('../node_modules/@uireact/view/dist/index.css'); 
            `}
          </SyntaxHighlighter>
          </UiSpacing>
            <UiText size='small'>If you used the automatic script there will be a global.css file with some imports already there.</UiText>
            <br />
            <DocSubHeading>Theme</DocSubHeading>
            <UiText>@UiReact brings a default theme that can be used for your web app, however if you want to customize colors, fonts, sizes, etc... Then you can create your own theme</UiText>
            <br />
            <UiButtonLink coloration='dark' padding={{all: 'four'}}>
                <Link href="./create-theme">
                    Create theme <UiIcon icon="Layers" coloration='dark' />
                </Link>
            </UiButtonLink>
            <br />
        </>
    )
}