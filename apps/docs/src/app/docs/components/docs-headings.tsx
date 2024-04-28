import Link from "next/link";

import { UiFlexGrid } from "@uireact/flex"
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiLineSeparator } from "@uireact/separator";
import { UiHeading, UiLink, UiText } from "@uireact/text"

type DocSubHeadingProps = {
    children: React.ReactNode;
}
type DocHeadingProps = {
    children: React.ReactNode;
}

const headingSpacing: UiSpacingProps['padding'] = { block: 'six' };

export const DocSubHeading = ({ children }: DocSubHeadingProps) => {
    const link = children?.toString().replace(' ', '-').toLowerCase();

    return (
        <UiSpacing padding={headingSpacing}>
            <UiLink>
                <Link href={`#${link}`} id={link}>
                    <UiFlexGrid gap="four">
                        <UiText category="tertiary" size="xlarge">#</UiText>
                        <UiHeading level={4}>{children}</UiHeading>
                    </UiFlexGrid>
                </Link>
            </UiLink>
        </UiSpacing>
    )
}

export const DocHeading = ({ children }: DocHeadingProps) => {
    return (
        <UiSpacing padding={headingSpacing}>
            <UiHeading level={1}>{children}</UiHeading>
            <br />
            <UiLineSeparator />
        </UiSpacing>
    )
}