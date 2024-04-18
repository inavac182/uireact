import { UiButtonLink, UiHeading, UiLink, UiText } from "@uireact/text"

import { DemoCard } from "@/app/internal"
import { UiCard } from "@uireact/card"
import { UiSpacing, UiSpacingProps } from "@uireact/foundation"

const cardSpacing: UiSpacingProps['padding'] = { all: 'five' };

export const TextsDemo = () => { 
  return (
    <DemoCard category="primary" shadow={false}>
      <>
        <UiHeading>Typography</UiHeading>
        <br />
        <UiCard styling="outlined">
          <UiSpacing padding={cardSpacing}>
            <UiHeading level={4}>Headings</UiHeading>
            <br />
            <UiText size="small">Text components share styles and properties from your theme.</UiText>
            <br />
            <UiText size="small" category="positive">They can also showcase supportive colorations.</UiText>
            <br />
            <UiLink size="small"><a href="#demo-components">Animated Links</a></UiLink>
            <br />
            <br />
            <UiButtonLink>
              <a href="#demo-components">
                <UiText size="small" inverseColoration>
                  Button Links
                </UiText>
                </a>
            </UiButtonLink>
          </UiSpacing>
        </UiCard>
        <br />
        <UiText>All the texts components are controlled from the theme and can change colors, sizes</UiText>
      </>
    </DemoCard>
  )
}