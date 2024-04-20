import React from 'react';

import { UiHeading, UiLink, UiText } from '@uireact/text';
import { UiLineSeparator } from '@uireact/separator';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { InstallationScripts } from './components/installation-scripts';
import { UiList, UiListItem } from '@uireact/list';

const headingSpacing: UiSpacingProps['padding'] = { block: 'four' };
const listSpacing: UiSpacingProps['padding'] = { inline: 'five'};

export default function Docs () {
    return (
        <>
            <UiSpacing padding={headingSpacing}>
                <UiHeading>Welcome to @UiReact docs</UiHeading>
            </UiSpacing>
            <UiLineSeparator />
            <br />
            <UiHeading level={4}>Installation</UiHeading>
            <br />
            <InstallationScripts />
            <br />
            <UiText>Make sure you also install all the peer dependencies:</UiText>
            <br />
            <UiSpacing padding={listSpacing}>
                <UiList type='BULLETED'>
                    <UiListItem>
                        <UiLink>
                            <a href="https://styled-components.com/docs/basics#installation">Styled-components</a>
                        </UiLink>
                    </UiListItem>
                    <UiListItem>
                        <UiLink>
                            <a href="https://www.framer.com/motion/introduction/#install">Framer motion</a>
                        </UiLink>
                    </UiListItem>
                    <UiListItem>
                        <UiLink>
                            <a href="https://react.dev/learn/installation">React</a>
                        </UiLink>
                    </UiListItem>
                </UiList>
            </UiSpacing>
        </>
    )
}