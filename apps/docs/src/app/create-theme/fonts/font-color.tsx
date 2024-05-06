import { ColorCategories, ThemeColor } from "@uireact/foundation"
import styled from "styled-components";

import { UiText } from "@uireact/text";

import { FontColorBoxPicker } from "./font-color-box-picker";

const Container = styled.div<{ $coloration: ThemeColor }>`
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

export const FontColor = () => {
    return (
        <div>
            <UiText fontStyle="bold">Font color:</UiText>
            <br />
            <Container $coloration={ThemeColor.dark}>
                <strong>Font color for dark coloration</strong>
                <br />
                <br />
                <p>We are using your selected primary color for your theme's dark coloration as background in this pill so you can see how your font color will look like on top of it:</p>
                <br />
                <FontColorBoxPicker category={ColorCategories.fonts} $coloration={ThemeColor.dark} />
            </Container>
            <br />
            <Container $coloration={ThemeColor.light}>
                <strong>Font color for light coloration</strong>
                <br />
                <br />
                <p>We are using your selected primary color for your theme's light coloration as background in this pill so you can see how your font color will look like on top of it:</p>
                <br />
                <FontColorBoxPicker category={ColorCategories.fonts} $coloration={ThemeColor.light} />
            </Container>
        </div>
    )
}