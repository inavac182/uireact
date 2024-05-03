import { useState } from 'react';
import { SketchPicker } from 'react-color';

import { ColorCategories } from '@uireact/foundation';
import { UiMenu } from '@uireact/menu';
import { UiInput } from '@uireact/form';

type ColorSelectorProps = {
    name: ColorCategories;
    value: string;
    setColor: (name: ColorCategories, value: string) => void;
}

export const ColorSelector = ({ name, value, setColor }: ColorSelectorProps) => {
    const [pickerVisible, setPickerVisible] = useState(false);

    return (
        <div>
            <UiInput value={value} label={name} labelOnTop />
            <UiMenu visible={pickerVisible} closeMenuCB={() => setPickerVisible(false)}>
                <SketchPicker onChangeComplete={(color) => setColor(name, color.hex)} color={value} />
            </UiMenu>
        </div>
    )
}