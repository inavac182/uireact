import Link from "next/link";
import { motion } from "motion/react";
import styled from "styled-components";

import { UiIcon } from "@uireact/icons";

const LinkContent = styled(motion.div)`
    display: flex;
    align-items: center;
    border-bottom: 5px dotted var(--tertiary-token_100);
    position: relative;
    font-weight: bold;
`;

const IconWrapper = styled(motion.div)`
    height: var(--texts-xlarge);
    display: flex;
    font-size: 30px;
    position: absolute;
    box-sizing: border-box;
`;

const LinkWrapper = styled.span`
    a {
        color: var(--tertiary-token_100);
        font-size: 40px;
        max-width: 90%;
    }
`;

const angleAnimation = {
    rest: {
        opacity: 0,
        left: '20%'
    },
    hovered: {
        opacity: 1,
        left: '95%',
        scale: 1.2
    }
}

type ContinueLinkProps = {
    text: string;
    url: string;
}

export const ContinueLink = ({ text, url }: ContinueLinkProps) => {
    return (
        <LinkWrapper>
            <Link href={url}>
                <LinkContent initial="rest" whileHover="hovered" whileTap={{ scale: 0.8 }}>
                    <span>
                        {text}
                    </span>
                    <IconWrapper variants={angleAnimation}>
                        <UiIcon icon="AngleClearRight" category="tertiary" size="xlarge" />
                    </IconWrapper>
                </LinkContent>
            </Link>
        </LinkWrapper>
    );
};
