import { UiHeading, UiLink, UiText } from "@uireact/text"

import { DemoCard } from "@/app/internal"

export const TextsDemo = () => { 
  return (
    <DemoCard category="primary" shadow={false}>
      <>
        <UiHeading>Typography</UiHeading>
        <br />
        <UiHeading level={4}>Headings</UiHeading>
        <br />
        <UiText size="small">Text components share styles and properties from your theme.</UiText>
        <br />
        <UiLink size="small"><a href="#demo-components">Animated Links</a></UiLink>
      </>
    </DemoCard>
  )
}