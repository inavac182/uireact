import styled from "styled-components";

import { UiCard } from "@uireact/card"
import { UiReactFadeDown } from "@uireact/framer-animations";

type ThemePropContainerProps = {
    children: React.ReactNode;
}

const Container = styled(UiCard)`
    margin-top: 20px;
    border-radius: 10px;
`;

export const ThemePropContainer = ({ children }: ThemePropContainerProps) => {
    return <Container category="secondary" motion={{...UiReactFadeDown}}>{children}</Container>
};
