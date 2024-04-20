'use client';
import { useCallback, useState } from "react";

import { ScriptText } from "@/app/internal";
import { UiCard } from "@uireact/card";
import { UiTabs, UiTabItem } from "@uireact/tabs";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";

const scriptsPadding: UiSpacingProps['padding'] = { block: 'five', inline: 'four' };

export const InstallationScripts = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const onTabSelect = useCallback((id: number) => {
        setSelectedTab(id);
    }, [setSelectedTab]);

    return (
        <UiCard noPadding>
            <UiTabs>
                <UiTabItem identifier={1} handleClick={onTabSelect} selected={selectedTab === 1}>
                    npm
                </UiTabItem>
                <UiTabItem identifier={2} handleClick={onTabSelect} selected={selectedTab === 2}>
                    pnpm
                </UiTabItem>
                <UiTabItem identifier={3} handleClick={onTabSelect} selected={selectedTab === 3}>
                    yarn
                </UiTabItem>
            </UiTabs>
            <UiSpacing padding={scriptsPadding}>
                {selectedTab === 1 && (<ScriptText script='npm i -S @uireact/foundation @uireact/view' />)}
                {selectedTab === 2 && (<ScriptText script='pnpm add @uireact/foundation @uireact/view' />)}
                {selectedTab === 3 && (<ScriptText script='yarn install @uireact/foundation @uireact/view' />)}
            </UiSpacing>
        </UiCard>
    )
};
