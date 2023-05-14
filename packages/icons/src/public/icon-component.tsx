import React from 'react';

import * as SvgsComponents from './svgs';

type IconComponentProps = {
  icon: string;
};

export const IconComponent: React.FC<IconComponentProps> = ({ icon }: IconComponentProps) => (
  <>
    {Object.keys(SvgsComponents).map((key) => {
      if (key === icon) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const Component = SvgsComponents[key];

        return <Component key={`icon-component-${key}`} />;
      }

      return null;
    })}
  </>
);
