import { useCallback } from 'react';

import { ColorCategories, Theme, ThemeColor } from '@uireact/foundation';
import { ColorSelector } from './color-selector';
import { UiText } from '@uireact/text';

type ColorPropsProps = {
    coloration: ThemeColor;
    theme: Theme;
    setColoration: (theme: Theme) => void;
}

export const ColorProps = ({ coloration, theme, setColoration }: ColorPropsProps) => {
    const onColorSelect = useCallback((name: ColorCategories, value: string) => {
        const data = { ...theme };
        data[coloration][name].token_100 = value;
        setColoration(data);
    }, [theme]);

    return (
        <div>
            <UiText>Main colors</UiText>
            <ColorSelector name={ColorCategories.primary} setColor={onColorSelect} value={theme[coloration].primary.token_100} />
            <ColorSelector name={ColorCategories.secondary} setColor={onColorSelect} value={theme[coloration].secondary.token_100} />
            <ColorSelector name={ColorCategories.tertiary} setColor={onColorSelect} value={theme[coloration].tertiary.token_100} />
            <UiText>Support colors</UiText>
            <ColorSelector name={ColorCategories.positive} setColor={onColorSelect} value={theme[coloration].positive.token_100} />
            <ColorSelector name={ColorCategories.negative} setColor={onColorSelect} value={theme[coloration].negative.token_100} />
            <ColorSelector name={ColorCategories.error} setColor={onColorSelect} value={theme[coloration].error.token_100} />
            <ColorSelector name={ColorCategories.warning} setColor={onColorSelect} value={theme[coloration].warning.token_100} />
        </div>
    )
}