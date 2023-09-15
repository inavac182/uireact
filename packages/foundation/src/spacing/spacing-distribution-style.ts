import { SpacingDistribution, Theme } from '../types';

/** @deprecated Deprecated use getSpacingStyle */
export const getSpacingDistributionStyle = (sizing: SpacingDistribution, theme: Theme): string => {
  if (sizing.all) {
    return theme.spacing[sizing.all];
  }

  if (sizing.inline || sizing.block) {
    return `${sizing.block ? theme.spacing[sizing.block] : '0px'} ${
      sizing.inline ? theme.spacing[sizing.inline] : '0px'
    }`;
  }

  return `${sizing.top ? theme.spacing[sizing.top] : '0px'} ${sizing.right ? theme.spacing[sizing.right] : '0px'} ${
    sizing.bottom ? theme.spacing[sizing.bottom] : '0px'
  } ${sizing.left ? theme.spacing[sizing.left] : '0px'}`;
};
