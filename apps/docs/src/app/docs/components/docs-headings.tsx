import Link from "next/link";
import styled from "styled-components";

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

const Heading = styled.h1`
    font-size: 50px;
    width: fit-content;
    background: -webkit-linear-gradient(45deg,  var(--fonts-token_100) 0%, var(--secondary-token_100) 50%, var(--tertiary-token_100) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const headingSpacing: UiSpacingProps['padding'] = { block: 'four' };

export const DocSubHeading = ({ children }: DocSubHeadingProps) => {
    const link = children?.toString().replace(' ', '-').toLowerCase();

    return (
        <UiSpacing padding={headingSpacing}>
            <UiLink>
                <Link href={`#${link}`} id={link}>
                    <UiFlexGrid gap="four" alignItems="center">
                        <UiText category="tertiary" size="large">#</UiText>
                        <UiHeading level={3}>{children}</UiHeading>
                    </UiFlexGrid>
                </Link>
            </UiLink>
        </UiSpacing>
    )
}

export const DocHeading = ({ children }: DocHeadingProps) => {
    return (
        <UiSpacing padding={headingSpacing}>
            <Heading>{children}</Heading>
            <br />
            <UiLineSeparator />
        </UiSpacing>
    )
}