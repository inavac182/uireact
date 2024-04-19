import { UiLineSeparator } from '@uireact/separator';
import { UiHeading, UiLink, UiText } from '@uireact/text';
import Link from 'next/link';
import React from 'react';

export default function Docs () {
    return (
        <>
            <UiHeading>Docs page</UiHeading>
            <UiLineSeparator />
            <UiText>Welcome to @UiReact docs page</UiText>
            <UiLink><Link href="./docs/badge/">Badge</Link></UiLink>
        </>
    )
}