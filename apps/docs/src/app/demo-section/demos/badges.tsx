import { UiBadge } from '@uireact/badge';
import { UiHeading } from '@uireact/text';

import { DemoCard } from "@/app/internal"

export const BadgesDemo = () => {
  return (
    <DemoCard category='tertiary' weight='200'>
      <>
        <UiHeading>Badges</UiHeading>
        <br />
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
      </>
    </DemoCard>
  )
}