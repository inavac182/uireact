import { UiBadge } from '@uireact/badge';
import { UiHeading, UiText } from '@uireact/text';

import { DemoCard } from "@/app/internal"
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

export const BadgesDemo = () => {
  return (
    <DemoCard shadow={false}>
      <>
        <UiHeading>Badges</UiHeading>
        <br />
        <UiFlexGrid alignItems='center' justifyContent='space-between'>
          <UiFlexGridItem>
            <UiBadge category='primary' size='xlarge'>✅ Note</UiBadge>
            <br />
            <br />
            <UiBadge category='secondary' size='xlarge'>🌿 Eco</UiBadge>
            <br />
            <br />
            <UiBadge category='positive'>✈️ Travel</UiBadge>
            <br />
            <br />
            <UiBadge category='warning' size="small">🔥 Sale</UiBadge>
            <br />
            <br />
            <UiBadge category='negative' size='xsmall'>🚘 Car</UiBadge>
          </UiFlexGridItem>
          <UiFlexGridItem>
            <UiText size='small'>Remark information</UiText>
          </UiFlexGridItem>
        </UiFlexGrid>
      </>
    </DemoCard>
  )
}