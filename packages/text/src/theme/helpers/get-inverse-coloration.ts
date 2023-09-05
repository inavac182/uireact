import { ThemeColor } from '@uireact/foundation';
import { InverseColorationProp } from '../../types';

export const getInverseColoration = (
  selectedTheme: ThemeColor,
  inverseColoration?: boolean | InverseColorationProp
): boolean => {
  let isInverse = false;

  if (typeof inverseColoration === 'object') {
    if (inverseColoration.dark && selectedTheme === ThemeColor.dark) {
      isInverse = true;
    } else if (inverseColoration.light && selectedTheme === ThemeColor.light) {
      isInverse = true;
    }
  } else if (inverseColoration) {
    isInverse = true;
  }

  return isInverse;
};
