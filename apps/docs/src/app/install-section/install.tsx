'use client';

import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiHeading, UiLink, UiText } from "@uireact/text"
import { UiLineSeparator } from "@uireact/separator";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Section, ScriptCard } from '../internal';
import Link from "next/link";

const contentSpacing: UiSpacingProps['padding'] = { top: 'six' };
const headingSpacing: UiSpacingProps['padding'] = { bottom: 'five' };

export const Installation = () => { 
  return (
    <Section centerContent weight="150" includeBottomSeparator>
      <UiSpacing padding={contentSpacing}>
        <UiSpacing padding={headingSpacing}>
          <UiHeading level={1} centered>🔥 Getting started</UiHeading>
        </UiSpacing>
        <UiLineSeparator />
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
          <UiLineSeparator />
          <br />
          <UiHeading>Manual setup</UiHeading>
        </UiSpacing>
        <UiText size="small">
          We suppose you already have a react environment working, we suggest you use <UiLink size="small"><a href="https://nextjs.org/" target="_blank">Next JS</a></UiLink> for your react app.
          They also have a doc page for getting <UiLink size="small"><a href="https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components" target="_blank">💅🏾 styled components set up in Next JS</a></UiLink>.
        </UiText>
        <UiSpacing padding={contentSpacing}>
          <UiHeading>
            <UiText inline category="tertiary" size="xlarge">1.</UiText> Set up dependencies:
          </UiHeading>
          <ScriptCard script="npm i -S styled-components framer-motion" />
          <UiText>
            Get styled-components up and running in your project.
          </UiText>
        </UiSpacing>
        <UiSpacing padding={contentSpacing}>
          <UiHeading>
            <UiText inline category="tertiary" size="xlarge">2.</UiText> Install the foundation and view packages:
          </UiHeading>
          <ScriptCard script="npm i -S @uireact/foundation @uireact/view" />
        </UiSpacing>
        <UiSpacing padding={contentSpacing}>
          <UiHeading>
            <UiText inline category="tertiary" size="xlarge">3.</UiText> Set up your UiView
          </UiHeading>
          <UiText>You need to wrap your react tree in the <UiLink><Link href="/docs/view" target="_blank">UiView</Link></UiLink> component</UiText>
          <br />
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
        </UiSpacing>
        <UiSpacing padding={contentSpacing}>
          <UiHeading>
            <UiText inline category="tertiary" size="xlarge">4.</UiText> Create your theme! ✨
          </UiHeading>
          <UiSpacing padding={contentSpacing}>
            <UiText>
              @uireact provides with a <UiLink><a href="https://github.com/inavac182/uireact/blob/main/packages/foundation/src/themes/default-theme.ts">default theme</a></UiLink> so you can use it or create your own. If you like the default theme then you can skip this step.
              </UiText>
            <br />
            <UiText>
              If you want to build a custom theme visit <UiLink><Link href="./create-theme">Create your own theme</Link></UiLink> to learn more about it.
            </UiText>
          </UiSpacing>
        </UiSpacing>
        <UiSpacing padding={contentSpacing}>
          <UiHeading>🏁 That&apos;s it, Start creating magic ✨</UiHeading>
        </UiSpacing>
      </UiSpacing>
    </Section>
  )
}