import { useCallback, useState } from "react";
import styled from "styled-components";

import { UiSpacing, UiSpacingProps } from "@uireact/foundation"
import { UiHeading, UiText } from "@uireact/text"
import { UiButton } from "@uireact/button"
import { UiMenu } from '@uireact/menu';

import { DemoCard } from "@/app/internal"
import { UiIcon } from "@uireact/icons";

const TriggerSpacing: UiSpacingProps['padding'] = { block: 'four' };
const MenuSpacing: UiSpacingProps['padding'] = { block: 'five', inline: 'four'};

const MenuContent = styled.div`
    width: 200px;
`;

export const MenusDemos = () => {
    const [visible, setVisible] = useState(false);

    const onTrigger = useCallback(() => {
        setVisible(!visible);
    }, [visible]);

    return (
        <DemoCard category="secondary">
            <>
                <UiHeading>Menus</UiHeading>
                <UiText>Component that renders underneath the trigger, click:</UiText>
                <br />
                <UiButton onClick={onTrigger} styling="outlined" rounded>
                    <UiIcon icon="BatteryFull" />
                </UiButton>
                <UiMenu visible={visible} closeMenuCB={onTrigger}>
                    <UiSpacing padding={MenuSpacing}>
                        <MenuContent>
                            <UiHeading>Floating content</UiHeading>
                            <br />
                            <UiText>
                                Some content rendering after the trigger
                            </UiText>
                        </MenuContent>
                    </UiSpacing>
                </UiMenu>
            </>
        </DemoCard>
    )
}