import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { UiButton } from "@uireact/button";
import { UiCard } from "@uireact/card"
import { UiFlexGrid } from "@uireact/flex";
import { UiInput } from "@uireact/form";
import { Spacing, SpacingType, Theme, UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiText } from "@uireact/text"
import { UiValidator, UiValidatorErrors } from "@uireact/validator"
import { UiIcon } from "@uireact/icons";

import { cleanUpSpacingUnits, spacesStructure } from "../utils";

const validator = new UiValidator();

const schema = {
    one: validator.ruler().isRequired('The level one spacing is required'),
    two: validator.ruler().isRequired('The level two spacing is required'),
    three: validator.ruler().isRequired('The level three spacing is required'),
    four: validator.ruler().isRequired('The level four spacing is required'),
    five: validator.ruler().isRequired('The level five spacing is required'),
    six: validator.ruler().isRequired('The level six spacing is required'),
    seven: validator.ruler().isRequired('The level seven spacing is required')
}

const buttonSpacing: UiSpacingProps['padding'] = { inline: 'five', block: 'four' };

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
    const [spacesData, setSpacesData] = useState(spacesStructure);
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

        const updatedTheme = { ...theme };
        updatedTheme.spacing = { ...spacesData };
        Object.keys(updatedTheme.spacing).map((spaceKey) => {
            const spacing = updatedTheme.spacing[spaceKey as SpacingType]
            updatedTheme.spacing[spaceKey as SpacingType] = `${spacing}px`;
        });

        setCompleted(true);
        setErrors({});
        router.push(`?theme=${btoa(JSON.stringify(updatedTheme))}`);
    }, [setErrors, spacesData]);

    useEffect(() => {
        if (theme) {
            const spaces = cleanUpSpacingUnits(theme);
            setSpacesData(spaces);
        }
    }, [theme, setSpacesData]);

    return (
        <UiCard category="primary" weight="150">
            <UiText>Spacing values, one being smallest and seven the biggest. All values are in pixels.</UiText>
            <br />
            <UiFlexGrid direction="column">
                <UiInput name="one" value={spacesData.one} onChange={updateSpacing} label="One" labelOnTop type="number" category={errors?.one ? 'error' : undefined} />
                <UiInput name="two" value={spacesData.two} onChange={updateSpacing} label="Two" labelOnTop type="number" category={errors?.two ? 'error' : undefined} />
                <UiInput name="three" value={spacesData.three} onChange={updateSpacing} label="Three" labelOnTop type="number" category={errors?.three ? 'error' : undefined} />
                <UiInput name="four" value={spacesData.four} onChange={updateSpacing} label="Four" labelOnTop type="number" category={errors?.four ? 'error' : undefined} />
                <UiInput name="five" value={spacesData.five} onChange={updateSpacing} label="Five" labelOnTop type="number" category={errors?.five ? 'error' : undefined} />
                <UiInput name="six" value={spacesData.six} onChange={updateSpacing} label="Six" labelOnTop type="number" category={errors?.six ? 'error' : undefined} />
                <UiInput name="seven" value={spacesData.seven} onChange={updateSpacing} label="Seven" labelOnTop type="number" category={errors?.seven ? 'error' : undefined} />
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
        </UiCard>
    )
}
