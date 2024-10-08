import { useState } from "react";
import { UiHeading, UiText } from "@uireact/text";
import { UiInput, UiSwitch } from '@uireact/form';

import { DemoCard } from "@/app/internal";

export const FormsDemo = () => {
    const [checked, setChecked] = useState(false);
    const [checkedPositive, setCheckedPositive] = useState(false);

    return (
        <>
            <DemoCard shadow={false}>
                <>
                    <UiHeading>Forms</UiHeading>
                    <UiText size="small">All form components have categories to render states</UiText>
                    <br />
                    <UiInput label="Text fields" labelOnTop />
                    <UiInput label="Positive" category="positive" labelOnTop />
                    <UiInput label="Negative" category="error" labelOnTop error="Some error" />
                    <br />
                    <UiSwitch label="Switches" name="switch" checked={checked} onChange={() => setChecked(!checked)}  />
                    <br />
                    <UiSwitch label="Positive Switch" name="positive-switch" category="positive" checked={checkedPositive} onChange={() => setCheckedPositive(!checkedPositive)} />
                    <br />
                </>
            </DemoCard>
        </>
    )
}