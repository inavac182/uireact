import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { UiButton } from "@uireact/button";
import { UiCard } from "@uireact/card"
import { UiFlexGrid } from "@uireact/flex";
import { UiInput } from "@uireact/form";
import { Spacing, Theme, UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiText } from "@uireact/text"
import { UiValidator, UiValidatorErrors } from "@uireact/validator"
import { UiIcon } from "@uireact/icons";

import { cleanUpSpacingUnits, spacesStructure } from "../utils";
import { mergeSpacesTheme } from "../utils/merge-spaces-theme";

const validator = new UiValidator();

const schema = {
    one: validator.field('text').present('The level one spacing is required'),
    two: validator.field('text').present('The level two spacing is required'),
    three: validator.field('text').present('The level three spacing is required'),
    four: validator.field('text').present('The level four spacing is required'),
    five: validator.field('text').present('The level five spacing is required'),
    six: validator.field('text').present('The level six spacing is required'),
    seven: validator.field('text').present('The level seven spacing is required')
}

const buttonSpacing: UiSpacingProps['padding'] = { inline: 'five', block: 'two' };

const spacingDefaultValues: Spacing = {
    one: '0.46',
    two: '0.61',
    three: '1.08',
    four: '2.83',
    five: '4.04',
    six: '6.06',
    seven: '8.09'
}

export const SpacingForm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const theme: Theme | null = useMemo(() => {
        const themeUrl = searchParams.get('theme');

        if (themeUrl) {
            return JSON.parse(atob(themeUrl));
        }

        return null;
    }, [searchParams]);

    const [completed, setCompleted] = useState(false);
    const [spacesData, setSpacesData] = useState(spacingDefaultValues);
    const [errors, setErrors] = useState<UiValidatorErrors>();

    const updateSpacing = useCallback((value: FormEvent<HTMLInputElement>) => {
        setSpacesData({ ...spacesData, [value.currentTarget.name]: value.currentTarget.value });
    }, [spacesData, setSpacesData]);

    const updateTheme = useCallback(() => {
        const result = validator.validate(schema, spacesData);

        if (!result.passed) {
            setErrors(result.errors);
            setCompleted(false);
            return;
        }

        if (!theme) {
            return;
        }

        const updatedTheme = mergeSpacesTheme(theme, spacesData);
        setCompleted(true);
        setErrors({});
        router.push(`?theme=${btoa(JSON.stringify(updatedTheme))}`, { scroll: false });
    }, [setErrors, setCompleted, spacesData, theme, router]);

    const resetTheme = useCallback(() => {
        if (theme) {
            setSpacesData(spacesStructure);
            setCompleted(false);
            setErrors({});

            const updatedTheme = mergeSpacesTheme(theme, spacesStructure);
            router.push(`?theme=${btoa(JSON.stringify(updatedTheme))}`, { scroll: false });
        }
    }, [theme, router, setCompleted, setErrors]);

    useEffect(() => {
        if (theme) {
            const spaces = cleanUpSpacingUnits(theme);
            setSpacesData(spaces);
        }
    }, [theme, setSpacesData]);

    return (
        <UiCard category="primary" weight="150">
            <UiText>Spacing values, one being smallest and seven the biggest. All values are in <UiText inline fontStyle="bold">rem</UiText>.</UiText>
            <br />
            <UiFlexGrid direction="column" gap="four">
                <UiFlexGrid alignItems="center" gap="four">
                    <UiInput name="one" value={spacesData.one} onChange={updateSpacing} label="One" labelOnTop type="number" category={errors?.one ? 'error' : undefined} /> 
                    <UiText>rem</UiText>
                </UiFlexGrid>
                <UiFlexGrid alignItems="center" gap="four">
                    <UiInput name="two" value={spacesData.two} onChange={updateSpacing} label="Two" labelOnTop type="number" category={errors?.two ? 'error' : undefined} />
                    <UiText>rem</UiText>
                </UiFlexGrid>
                <UiFlexGrid alignItems="center" gap="four">
                    <UiInput name="three" value={spacesData.three} onChange={updateSpacing} label="Three" labelOnTop type="number" category={errors?.three ? 'error' : undefined} />
                    <UiText>rem</UiText>
                </UiFlexGrid>
                <UiFlexGrid alignItems="center" gap="four">
                    <UiInput name="four" value={spacesData.four} onChange={updateSpacing} label="Four" labelOnTop type="number" category={errors?.four ? 'error' : undefined} />
                    <UiText>rem</UiText>
                </UiFlexGrid>
                <UiFlexGrid alignItems="center" gap="four">
                    <UiInput name="five" value={spacesData.five} onChange={updateSpacing} label="Five" labelOnTop type="number" category={errors?.five ? 'error' : undefined} />
                    <UiText>rem</UiText>
                </UiFlexGrid>
                <UiFlexGrid alignItems="center" gap="four">
                    <UiInput name="six" value={spacesData.six} onChange={updateSpacing} label="Six" labelOnTop type="number" category={errors?.six ? 'error' : undefined} />
                    <UiText>rem</UiText>
                </UiFlexGrid>
                <UiFlexGrid alignItems="center" gap="four">
                    <UiInput name="seven" value={spacesData.seven} onChange={updateSpacing} label="Seven" labelOnTop type="number" category={errors?.seven ? 'error' : undefined} />
                    <UiText>rem</UiText>
                </UiFlexGrid>
            </UiFlexGrid>
            <br />
            <UiFlexGrid gap="five" alignItems="center">
                <UiButton onClick={updateTheme} category="tertiary">
                    <UiSpacing padding={buttonSpacing}>
                        <UiText>Save</UiText>
                    </UiSpacing>
                </UiButton>
                {completed && (
                    <UiIcon icon="CheckCircle" category="positive" />
                )}
            </UiFlexGrid>
            <br />
            <UiButton onClick={resetTheme} category="warning" styling="clear">
                    <UiSpacing padding={buttonSpacing}>
                        <UiFlexGrid alignItems="center" gap="four">
                            <UiIcon icon="Refresh" />
                            <UiText>Reset</UiText>
                        </UiFlexGrid>
                    </UiSpacing>
                </UiButton>
        </UiCard>
    )
}
