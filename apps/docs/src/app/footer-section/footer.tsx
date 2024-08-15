import Link from "next/link"

import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex"
import { UiIcon } from "@uireact/icons"
import { UiButtonLink, UiHeading, UiLink } from "@uireact/text"
import styled from "styled-components"
import { Logo } from "../internal"
import { UiLineSeparator } from "@uireact/separator"
import { UiSpacing, UiSpacingProps } from "@uireact/foundation"

const FooterWrapper = styled.div`
    padding: 50px;
    top: 200px;
    position: relative;
    background-color: var(--primary-token_50);

    > div {
        max-width: 600px;
        margin: 0 auto;
    }
`;

const linksSpacing: UiSpacingProps['padding'] = { inline: 'five', block: 'seven' }

export const Footer = () => {
    return (
        <FooterWrapper>
            <div>
                <UiHeading centered>Learn more</UiHeading>
                <UiLineSeparator />
                <UiSpacing padding={linksSpacing}>
                    <UiFlexGrid alignItems="center" justifyContent="center" gap="five">
                        <UiFlexGridItem>
                            <UiButtonLink inverseTextColoration padding={{ all: 'four' }}>
                                <a href="https://github.com/inavac182/uireact" target="_blank">
                                    <UiIcon icon="BrandsGithub" category="fonts" inverseColoration /> Repository
                                </a>
                            </UiButtonLink>
                        </UiFlexGridItem>
                        <UiFlexGridItem>
                            <UiButtonLink inverseTextColoration padding={{ all: 'four' }}>
                                <Link href='/docs'>
                                    <UiIcon icon="Book" category="fonts" inverseColoration /> Docs
                                </Link>
                            </UiButtonLink>
                        </UiFlexGridItem>
                    </UiFlexGrid>
                </UiSpacing>
                <UiLineSeparator />
                <br />
                <UiHeading>Contact us</UiHeading>
                <br />
                <UiFlexGrid direction="column">
                    <UiLink>
                        <a href="https://github.com/inavac182/">
                            <UiIcon icon="BrandsGithub" /> Felipe Nava 
                        </a>
                    </UiLink>
                    <UiLink>
                        <a href="https://www.linkedin.com/in/inavac/">
                            <UiIcon icon="BrandsLinkedin" /> Felipe Nava 
                        </a>
                    </UiLink>
                </UiFlexGrid>
                <br />
                <UiFlexGrid direction="column">
                    <UiLink>
                        <a href="https://github.com/saudelog">
                            <UiIcon icon="BrandsGithub" /> Sergio Ortiz
                        </a>
                    </UiLink>
                    <UiLink>
                        <a href="https://www.linkedin.com/in/sergio-audel-ortiz-gutierrez-1698b158/">
                            <UiIcon icon="BrandsLinkedin" /> Sergio Ortiz
                        </a>
                    </UiLink>
                </UiFlexGrid>
                <br />
                <br />
                <Logo />
            </div>
        </FooterWrapper>
    )
}
