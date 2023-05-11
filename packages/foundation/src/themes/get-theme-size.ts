import { Theme, HeadingLevel, TextSize, Sizing } from '../types';

export const getHeadingSize = (theme: Theme, level: 1 | 2 | 3 | 4 | 5 | 6): string => {
  let headingLevel = HeadingLevel.level3;

  switch (level) {
    case 1:
      headingLevel = HeadingLevel.level1;
      break;
    case 2:
      headingLevel = HeadingLevel.level2;
      break;
    case 3:
      headingLevel = HeadingLevel.level3;
      break;
    case 4:
      headingLevel = HeadingLevel.level4;
      break;
    case 5:
      headingLevel = HeadingLevel.level5;
      break;
    case 6:
      headingLevel = HeadingLevel.level6;
      break;
    default:
      headingLevel = HeadingLevel.level3;
      break;
  }

  return theme.sizes.headings[headingLevel];
};

export const getTextSize = (theme: Theme, size: TextSize): string => {
  return theme.sizes.texts[size];
};

export const getSpacingSize = (theme: Theme, size: Sizing): string => {
  return theme.spacing[size];
};
