import styled from "styled-components";

import { ColorCategories, ThemeColor } from "@uireact/foundation"
import { UiFlexGrid } from "@uireact/flex";
import { UiInput } from "@uireact/form";
import { ColorBoxPicker } from "./color-box-picker";

type ColorationsFormProps = {
    $coloration: ThemeColor;
}

const Container = styled.div<ColorationsFormProps>`
    ${props => `
        ${props.$coloration === ThemeColor.dark ? `
            background-color: #000;
            color: #fff;
        ` : `
            background-color: #fff;
            color: #000;
        `}
    `}

    padding: 30px;
    border-radius: 30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ColorationsForm = ({ $coloration }: ColorationsFormProps) => {
    return (
        <Container $coloration={$coloration}>
            <h3>{$coloration} coloration</h3>
            <br />
            <UiFlexGrid gap="five">
                <ColorBoxPicker category={ColorCategories.primary} $coloration={$coloration} />
                <ColorBoxPicker category={ColorCategories.secondary} $coloration={$coloration} />
                <ColorBoxPicker category={ColorCategories.tertiary} $coloration={$coloration} />
            </UiFlexGrid>
        </Container>
    )
}

