import { UiHeading } from "@uireact/text";
import { UiInput, UiSwitch } from '@uireact/form';

import { DemoCard } from "@/app/internal";

export const FormsDemo = () => {
    return (
        <>
            <DemoCard shadow={false}>
                <>
                    <UiHeading>Forms</UiHeading>
                    <br />
                    <UiInput label="Text fields" labelOnTop size="large" />
                    <UiInput label="Positive" category="positive" labelOnTop size="large" />
                    <UiInput label="Negative" category="error" labelOnTop size="large" />
                    <br />
                    <UiSwitch label="Switches" name="switch"  />
                    <br />
                    <UiSwitch label="Positive Switch" name="positive-switch" category="positive"  />
                    <br />
                </>
            </DemoCard>
        </>
    )
}