import { SpacingDistribution } from "../types";

export const getSpacingClass = (type: 'margin' | 'padding', spacing?: SpacingDistribution) => {
    if (!spacing) {
      return '';
    }
  
    if (spacing.all) {
      return `${type}-${spacing.all}`;
    }
  
    if (spacing.block || spacing.inline) {
      let classes = '';
  
      if (spacing.block) {
        classes += `${type}-top-${spacing.block} ${type}-bottom-${spacing.block}`;
      }
  
      if (spacing.inline) {
        classes += ` ${type}-left-${spacing.inline} ${type}-right-${spacing.inline}`;
      }
  
      return classes
    }
  
    let classes = '';
  
    if (spacing.top) {
      classes += `${type}-top-${spacing.top}`;
    }
  
    if (spacing.bottom) {
      classes += ` ${type}-bottom-${spacing.bottom}`;
    }
  
    if (spacing.left) {
      classes += ` ${type}-left-${spacing.left}`;
    }
  
    if (spacing.right) {
      classes += ` ${type}-right-${spacing.right}`;
    }
  
    return classes;
};  