import Link from "next/link";

import { UiFlexGrid } from "@uireact/flex"
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiLineSeparator } from "@uireact/separator";
import { UiHeading, UiLink, UiText } from "@uireact/text"

type DocSubHeadingProps = {
    heading: string;
    link: string;
}
type DocHeadingProps = {
    heading: string;
}

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };

export const DocSubHeading = ({ heading, link }: DocSubHeadingProps) => {
    return (
        <UiSpacing padding={headingSpacing}>
            <UiLink>
                <Link href={`#${link}`} id={link}>
                    <UiFlexGrid gap="four">
                        <UiText category="tertiary" size="xlarge">#</UiText>
                        <UiHeading level={4}>{heading}</UiHeading>
                    </UiFlexGrid>
                </Link>
            </UiLink>
        </UiSpacing>
    )
}

export const DocHeading = ({ heading }: DocHeadingProps) => {
    return (
        <UiSpacing padding={headingSpacing}>
            <UiHeading>{heading}</UiHeading>
            <br />
            <UiLineSeparator />
        </UiSpacing>
    )
}