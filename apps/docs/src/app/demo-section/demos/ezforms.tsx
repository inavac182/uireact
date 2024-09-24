import Link from 'next/link';
import { UiHeading, UiLink, UiText } from "@uireact/text"

import { DemoCard } from "@/app/internal"

export const EzFormsDemo = () => {
    return (
        <DemoCard category="tertiary">
            <>
              <UiHeading>EzForms</UiHeading>
              <br />
              <UiText>A component that can automatically render forms from a schema.</UiText>
              <UiLink category='primary'>
                <Link href={`/docs/ezforms`}>
                  Docs
                </Link>
              </UiLink>
            </>
        </DemoCard>
    )
}