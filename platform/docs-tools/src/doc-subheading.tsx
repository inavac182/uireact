import React from "react";

import { UiFlexGrid } from "@uireact/flex";
import { UiSpacing, UiSpacingProps } from "@uireact/foundation";
import { UiLink, UiText, UiHeading } from "@uireact/text";

import Link from 'next/link';

const headingSpacing: UiSpacingProps['padding'] = { block: 'five' };

type DocSubHeadingProps = {
  children: React.ReactNode;
}

export const DocSubHeading = ({ children }: DocSubHeadingProps) => {
  const link = children?.toString().replace(' ', '-').toLowerCase();

  return (
    <UiSpacing padding={headingSpacing}>
      <UiLink>
        <Link href={`#${link}`} id={link}>
          <UiFlexGrid gap="four" alignItems="center">
            <UiText category="tertiary" size="large">#</UiText>
            <UiHeading>{children}</UiHeading>
          </UiFlexGrid>
        </Link>
      </UiLink>
    </UiSpacing>
  )
}