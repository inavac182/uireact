import React from 'react';

import Link from 'next/link';

import { UiLink, UiText } from '@uireact/text';

export default function Docs () {
    return (
        <>
            <UiText>Welcome to @UiReact docs page</UiText>
            <UiLink><Link href="./docs/badge/">Badge</Link></UiLink>
        </>
    )
}