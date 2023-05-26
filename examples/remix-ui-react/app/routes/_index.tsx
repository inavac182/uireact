import type { V2_MetaFunction } from "@remix-run/node";
import { useState } from 'react'
import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';
import { UiButton } from '@uireact/button'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix! with uireact" },
  ];
};

export default function Index() {
  const [count, setCount] = useState(0)
  
  return (
    <UiView theme={DefaultTheme} selectedTheme={ThemeColor.light}>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
          <li>
          <UiButton theme='primary' onClick={() => setCount((count) => count + 1)}>count is {count}</UiButton>
          </li>
        </ul>
      </div>
    </UiView>
  );
}
