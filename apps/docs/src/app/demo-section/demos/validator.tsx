import { UiHeading, UiLink, UiText } from "@uireact/text"

import { DemoCard } from "@/app/internal"
import Link from "next/link"

export const ValidatorDemo = () => {
    return (
        <DemoCard category="primary">
            <>
              <UiHeading>Validator tool</UiHeading>
              <br />
              <UiText>A tool that can validate data objects with a given schema.</UiText>
              <UiLink>
                <Link href={`/docs/validator`}>
                  Docs
                </Link>
              </UiLink>
            </>
        </DemoCard>
    )
}