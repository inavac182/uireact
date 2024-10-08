import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"

import { UiCard } from "@uireact/card"
import { UiInput, UiSelect } from "@uireact/form"
import { UiValidator, UiValidatorErrors } from "@uireact/validator"
import { HeadingSizes, TextSizes, Theme, UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiFlexGrid, UiFlexGridItem } from "@uireact/flex";
import { UiText } from "@uireact/text";
import { UiButton } from "@uireact/button";
import { UiIcon } from "@uireact/icons";

import { addUnitToSizes, cleanUpUnitsFromSizes } from "../utils";

const validator = new UiValidator();

const textsSchema = {
    xsmall: validator.field('text').present('XSmall is required'),
    small: validator.field('text').present('Small is required'),
    regular: validator.field('text').present('Regular is required'),
    large: validator.field('text').present('Large is required'),
    xlarge: validator.field('text').present('XLarge is required')
};

const headingsSchema = {
    level1: validator.field('text').present('Level 1 is required'),
    level2: validator.field('text').present('Level 2 is required'),
    level3: validator.field('text').present('Level 3 is required'),
    level4: validator.field('text').present('Level 4 is required'),
    level5: validator.field('text').present('Level 5 is required'),
    level6: validator.field('text').present('Level 6 is required'),
};

const suggestedTextValues: TextSizes = {
    xsmall: '0.75',
    small: '1',
    regular: '1.75',
    large: '2.5',
    xlarge: '3.75'
};

const suggestedHeadingValues: HeadingSizes = {
    level1: '15',
    level2: '10',
    level3: '6.25',
    level4: '3.75',
    level5: '3',
    level6: '2.5',
};

const buttonSpacing: UiSpacingProps['padding'] = { inline: 'five', block: 'two' };

export const SizesForm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [sizesSuccess, setSizesSuccess] = useState(false);
    const [sizeUnit, setSizeUnit] = useState('rem');
    const [textData, setTextData] = useState<TextSizes>(suggestedTextValues);
    const [headingsData, setHeadingsData] = useState<HeadingSizes>(suggestedHeadingValues);
    const [textErrors, setTextErrors] = useState<UiValidatorErrors>();
    const [headingErrors, setHeadingErrors] = useState<UiValidatorErrors>();
    const themeParameter = searchParams.get('theme');

    const theme: Theme | null = useMemo(() => {
        if (themeParameter) {
            return JSON.parse(atob(themeParameter));
        }

        return null;
    }, [themeParameter]);

    const onTextsChange = useCallback((event: FormEvent<HTMLInputElement>) => {
        const data = { ...textData, [event.currentTarget.name]: event.currentTarget.value };
        setTextData(data);
    }, [textData, setTextData]);
    const onHeadingsChange = useCallback((event: FormEvent<HTMLInputElement>) => {
        const data = { ...headingsData, [event.currentTarget.name]: event.currentTarget.value || '' };
        setHeadingsData(data);
    }, [headingsData, setHeadingsData]);
    const updateTheme = useCallback(() => {
        const validateText = validator.validate(textsSchema, textData);
        const validateHeading = validator.validate(headingsSchema, headingsData);

        if (!validateHeading.passed || !validateText.passed) {
            setTextErrors(validateText.errors);
            setHeadingErrors(validateHeading.errors);
            
            return;
        }

        if (theme) {
            const updatedTheme = { ...theme };
            updatedTheme.sizes.texts = { ...textData };
            updatedTheme.sizes.headings = { ...headingsData };

            setSizesSuccess(true);

             addUnitToSizes(updatedTheme, sizeUnit);
            console.log(updatedTheme);
            router.push(`?theme=${btoa(JSON.stringify(updatedTheme))}`, { scroll: false });
        }
    }, [theme, textData, headingsData, sizeUnit, router]);
    const updateSizeMeasure = useCallback((value?: string) => {
        setSizeUnit(value || 'rem');
    }, [setSizeUnit]);

    useEffect(() => {
        if (themeParameter) {
            const theme: Theme = JSON.parse(atob(themeParameter));
            const cleanedUpTheme = cleanUpUnitsFromSizes(theme);
            setTextData(cleanedUpTheme.sizes.texts);
            setHeadingsData(cleanedUpTheme.sizes.headings);
        }
    }, [themeParameter]);

    return (
        <UiCard category="primary" weight="150">
            <UiFlexGrid justifyContent="center" gap="five">
                <UiFlexGridItem>
                    <UiText fontStyle="bold" align="center">Texts</UiText>
                    <br />
                    <UiInput label="XSmall size" labelOnTop value={textData?.xsmall} onChange={onTextsChange} name="xsmall" category={textErrors?.xsmall ? 'error' : undefined} type="number" />
                    <UiInput label="Small size" labelOnTop value={textData?.small} onChange={onTextsChange} name="small" category={textErrors?.small ? 'error' : undefined} type="number" />
                    <UiInput label="Regular size" labelOnTop value={textData?.regular} onChange={onTextsChange} name="regular" category={textErrors?.regular ? 'error' : undefined} type="number" />
                    <UiInput label="Large size" labelOnTop value={textData?.large} onChange={onTextsChange} name="large" category={textErrors?.large ? 'error' : undefined} type="number" />
                    <UiInput label="XLarge size" labelOnTop value={textData?.xlarge} onChange={onTextsChange} name="xlarge" category={textErrors?.xlarge ? 'error' : undefined} type="number" />
                </UiFlexGridItem>
                <UiFlexGridItem>
                    <UiText fontStyle="bold" align="center">Headings</UiText>
                    <br />
                    <UiInput label="level 1" labelOnTop value={headingsData?.level1} onChange={onHeadingsChange} name="level1" category={headingErrors?.level1 ? 'error' : undefined} type="number" />
                    <UiInput label="level 2" labelOnTop value={headingsData?.level2} onChange={onHeadingsChange} name="level2" category={headingErrors?.level2 ? 'error' : undefined} type="number" />
                    <UiInput label="level 3" labelOnTop value={headingsData?.level3} onChange={onHeadingsChange} name="level3" category={headingErrors?.level3 ? 'error' : undefined} type="number" />
                    <UiInput label="level 4" labelOnTop value={headingsData?.level4} onChange={onHeadingsChange} name="level4" category={headingErrors?.level4 ? 'error' : undefined} type="number" />
                    <UiInput label="level 5" labelOnTop value={headingsData?.level5} onChange={onHeadingsChange} name="level5" category={headingErrors?.level5 ? 'error' : undefined} type="number" />
                    <UiInput label="level 6" labelOnTop value={headingsData?.level6} onChange={onHeadingsChange} name="level6" category={headingErrors?.level6 ? 'error' : undefined} type="number" />
                </UiFlexGridItem>
            </UiFlexGrid>
            <br />
            <hr />
            <br />
            <UiText fontStyle="bold">Typography sizes unit</UiText>
            <UiText size="small">We highly recommend going with `rem` given that it provides the best user experience</UiText>
            <br />
            <UiSelect onChange={updateSizeMeasure} defaultValue="rem">
                <option value="px">px</option>
                <option value="em">em</option>
                <option value="rem">rem</option>
            </UiSelect>
            <br />
            <UiFlexGrid alignItems="center" gap="four">
                <UiButton onClick={updateTheme} category="tertiary">
                    <UiSpacing padding={buttonSpacing}>
                        <UiText>Save</UiText>
                    </UiSpacing>
                </UiButton>
                {sizesSuccess && <UiIcon icon="CheckCircle" size="xlarge" category="positive" />}
            </UiFlexGrid>
        </UiCard>
    )
}