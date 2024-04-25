import React from "react";

import CodeBlock from "./code-block";

type Props = {
  live?: boolean;
  children?: React.ReactNode;
  filename?: string;
  className?: string;
  scope?: Record<string, unknown>;
};

export default function Pre({ live, className, children, scope, ...props }: Props) {
  if (React.isValidElement(children) && children.type === "code") {
    return (
      <pre>
        <CodeBlock live={live} scope={scope}>{children}</CodeBlock>
      </pre>
    );
  }

  return <pre {...props}>{children}</pre>;
}