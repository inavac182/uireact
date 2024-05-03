import React from 'react';

import * as SvgsComponents from './svgs';
import { SVGMotionProps } from 'framer-motion';

type IconComponentProps = {
  icon: string;
  motionSvg?: SVGMotionProps<SVGSVGElement>;
  motionPath?: SVGMotionProps<SVGPathElement>;
};

export const IconComponent: React.FC<IconComponentProps> = ({ icon, motionSvg, motionPath }: IconComponentProps) => (
  <>
    {Object.keys(SvgsComponents).map((key) => {
      if (key === icon) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const Component = SvgsComponents[key];

        return <Component key={`icon-component-${key}`} data-testid="Icon" motionPath={motionPath} motionSvg={motionSvg} />;
      }

      return null;
    })}
  </>
);
