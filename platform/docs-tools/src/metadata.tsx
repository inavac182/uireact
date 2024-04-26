'use client';
import React from 'react';

import { UiLink } from '@uireact/text';

type MetadataProps = {
  packageName: string;
  packageJson: {
    version: number
  }
}

export const Metadata = ({ packageName, packageJson }: MetadataProps) => {
  return (
    <sup>
      <UiLink>
        <a href={`https://github.com/inavac182/uireact/blob/main/packages/${packageName}/`} target="_blank">
          v{packageJson.version}
        </a>
      </UiLink>
    </sup>
  )
}