'use client';
import React from "react";

import { LiveProvider, LiveError, LivePreview, LiveEditor } from "react-live";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeBlockProps = {
  children?: React.ReactElement;
  className?: string;
  live?: boolean;
  scope?: Record<string, unknown>;
  language?: string;
};

export default function CodeBlock({ children, className, live, scope, language }: CodeBlockProps) {
  const childCode = children?.props;

  if (!childCode) { 
    return <code lang="language-tsx">No content</code>;
  }

  const code = childCode.children.replace(/\n$/, "");
  const codeBlock = <code>{code}</code>;

  if (live) {
    return (
      <LiveProvider code={code} scope={scope}>
        <LivePreview />
        <LiveError />
        <LiveEditor code={code} className={className} />
      </LiveProvider>
    );
  }

  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus} wrapLines>
      {code}
    </SyntaxHighlighter>
  )
}