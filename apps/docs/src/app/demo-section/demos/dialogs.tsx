import { DemoCard } from "@/app/internal"

import { UiButton } from "@uireact/button"
import { UiHeading, UiText } from "@uireact/text"
import { UiSpacing, UiSpacingProps } from "@uireact/foundation"
import { useDialog } from '@uireact/dialog';
import { useCallback } from "react";

const triggerButtonSpacing: UiSpacingProps['padding'] = { block: 'four'};

const dialogId = 'demo-dialog';

export const DialogsDemo = () => {
    const { actions } = useDialog(dialogId);

    const onTrigger = useCallback(() => {
        actions.openDialog();
    }, [actions]);

    return (
        <DemoCard category="tertiary">
            <>
                <UiHeading coloration="light">Dialogs</UiHeading>
                <UiText size="small" coloration="light">Dialogs handlers built in with the UiView component</UiText>
                <br />
                <UiButton fullWidth onClick={onTrigger}>
                    <UiSpacing padding={triggerButtonSpacing}>
                        <UiText size="small">Trigger Dialog 🏔️</UiText>
                    </UiSpacing>
                </UiButton>
            </>
        </DemoCard>
    )
}