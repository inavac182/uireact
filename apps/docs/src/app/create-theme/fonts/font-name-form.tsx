import { FormEvent, useCallback, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { UiButton } from "@uireact/button"
import { UiCard } from "@uireact/card"
import { UiInput } from "@uireact/form"
import { Theme, UiSpacing, UiSpacingProps } from "@uireact/foundation"
import { UiText } from "@uireact/text"
import { UiIcon } from "@uireact/icons"
import { UiValidator, UiValidatorErrors } from "@uireact/validator"

import { getFontNameFromUrl } from "../utils"

const buttonSpacing: UiSpacingProps['padding'] = { inline: 'five', block: 'two' };

const validator = new UiValidator();

const schema = {
    fontName: validator.field('text').present('The font name is required')
}

export const FontNameForm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [fontName, setFontName] = useState('');
    const [errors, setErrors] = useState<UiValidatorErrors>();

    const saveFontName = useCallback(() => {
        const urlTheme = searchParams.get('theme');
        const data = { fontName };
        const result = validator.validate(schema, data);

        if (!result.passed) {
            setErrors(result.errors);
            return;
        }

        if (urlTheme) {
            const decodedTheme: Theme = JSON.parse(atob(urlTheme));
            decodedTheme.texts.font = fontName;
            router.push(`/create-theme/fonts?theme=${btoa(JSON.stringify(decodedTheme))}`, { scroll: false });
            setErrors(undefined);
        }
    }, [fontName, router, searchParams]);
    const updateFontName = useCallback((event: FormEvent<HTMLInputElement>) => {
        setFontName(event.currentTarget.value);
    }, [setFontName]);

    useEffect(() => {
        const fontNameInUrl = getFontNameFromUrl(searchParams.get('theme'));
        setFontName(fontNameInUrl);
    }, [searchParams]);

    return (
        <UiCard category="primary" weight="150">
            {getFontNameFromUrl(searchParams.get('theme')) && (
                <UiText>Font Saved <UiIcon icon="CheckCircle" category="positive" /></UiText>
            )}
            <br />
            <UiInput name="fontName" value={fontName} label="Font name" labelOnTop onChange={updateFontName} category={errors?.fontName ? 'error' : undefined } error={errors?.fontName?.[0]?.message} placeholder="'Source Sans Pro', sans-serif, Arial;" />
            <br />
            <UiText size="small">If you select a custom font name, remember that you still have to link it or import it to your web app.</UiText>
            <br />
            <UiButton onClick={saveFontName} category="tertiary">
                <UiSpacing padding={buttonSpacing}>
                    <UiText>
                        Save
                    </UiText>
                </UiSpacing>
            </UiButton>
        </UiCard>
    )
}