'use client';
import React from "react";
import styled from "styled-components";
import { LiveProvider, LiveError, LivePreview, LiveEditor } from "react-live";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { animateGradient } from "./gradient-animation";

type CodeBlockProps = {
  children?: React.ReactElement;
  className?: string;
  live?: boolean;
  scope?: Record<string, unknown>;
  language?: string;
};

const LivePreviewWrapper = styled.div`
  padding: 20px;
  background-color: var(--primary-token_150);
  border-radius: 20px 20px 0px 0px;
`;

const LiveEditorStyled = styled(LiveEditor)`
  > pre {
    border-radius: 0px 0px 20px 20px;
  }
`;

const LiveProviderWrapper = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 20px;
  padding: 5px;

  background: linear-gradient(
    -45deg,
    var(--primary-token_100),
    var(--secondary-token_100),
    var(--tertiary-token_100),
    var(--primary-token_10),
    var(--secondary-token_10),
    var(--tertiary-token_10),
    var(--primary-token_200),
    var(--secondary-token_200),
    var(--tertiary-token_200)
  );

  animation: ${animateGradient} 15s ease infinite;
  background-size: 400% 400%;
`;

export default function CodeBlock({ children, className, live, scope, language }: CodeBlockProps) {
  const childCode = children?.props;

  if (!childCode) { 
    return <code lang="language-tsx">No content</code>;
  }

  const code = childCode.children.replace(/\n$/, "");

  if (live) {
    return (
      <LiveProviderWrapper>
        <LiveProvider code={code} scope={scope} language={language}>
          <LivePreviewWrapper>
            <LivePreview />
          </LivePreviewWrapper>
          <LiveError />
          <LiveEditorStyled code={code} className={className} />
        </LiveProvider>
      </LiveProviderWrapper>
    );
  }

  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus} wrapLines>
      {code}
    </SyntaxHighlighter>
  )
}