import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { UiCard } from "@uireact/card";
import { Theme } from "@uireact/foundation";
import { UiHeading, UiText } from "@uireact/text";

export const SizesExample = () => {
    const searchParams = useSearchParams();
    const theme: Theme | null = useMemo(() => {
        const theme = searchParams.get('theme');

        if (theme) {
            return JSON.parse(atob(theme));
        }

        return null;
    }, [searchParams]);

    return (
        <>
            <UiCard category="primary" weight="150">
                <UiHeading>Size for texts:</UiHeading>
                <UiText>These are the sizes for texts that you've selected</UiText>
                <br />
                <strong>Xlarge:</strong>
                <p style={{ fontSize: theme?.sizes.texts.xlarge }}>
                    Lorem ipsum dolor sit amet 
                </p>
                <br />
                <strong>Large:</strong>
                <p style={{ fontSize: theme?.sizes.texts.large }}>
                    Lorem ipsum dolor sit amet
                </p>
                <br />
                <strong>Regular:</strong>
                <p style={{ fontSize: theme?.sizes.texts.regular }}>
                    Lorem ipsum dolor sit amet
                </p>
                <br />
                <strong>Small:</strong>
                <p style={{ fontSize: theme?.sizes.texts.small }}>
                    Lorem ipsum dolor sit amet
                </p>
                <br />
                <strong>XSmall:</strong>
                <p style={{ fontSize: theme?.sizes.texts.xsmall }}>
                    Lorem ipsum dolor sit amet
                </p>
            </UiCard>
            <br />
            <UiCard category="primary" weight="150">
                <UiHeading>Size for headings:</UiHeading>
                <UiText>These are the sizes for headings that you've selected</UiText>
                <br />
                <strong>level 1:</strong>
                <h1 style={{ fontSize: theme?.sizes.headings.level1 }}>
                    Lorem ipsum dolor sit amet 
                </h1>
                <br />
                <strong>level 2:</strong>
                <h2 style={{ fontSize: theme?.sizes.headings.level2 }}>
                    Lorem ipsum dolor sit amet
                </h2>
                <br />
                <strong>level 3:</strong>
                <h3 style={{ fontSize: theme?.sizes.headings.level3 }}>
                    Lorem ipsum dolor sit amet
                </h3>
                <br />
                <strong>level 4:</strong>
                <h4 style={{ fontSize: theme?.sizes.headings.level4 }}>
                    Lorem ipsum dolor sit amet
                </h4>
                <br />
                <strong>level 5:</strong>
                <h5 style={{ fontSize: theme?.sizes.headings.level5 }}>
                    Lorem ipsum dolor sit amet
                </h5>
                <br />
                <strong>level 6:</strong>
                <h6 style={{ fontSize: theme?.sizes.headings.level6 }}>
                    Lorem ipsum dolor sit amet
                </h6>
            </UiCard>
        </>
    )
};
