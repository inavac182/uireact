enum Sizing {
  one = 'one',
  two = 'two',
  three = 'three',
  four = 'four',
  five = 'five',
  six = 'six',
  seven = 'seven',
}

type SpacingType = 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven';

export type SpacingDistribution = {
  /** Applies size to all sides */
  all?: SpacingType;
  /** Applies size to top and bottom */
  block?: SpacingType;
  /** Applies size to left and right */
  inline?: SpacingType;
  /** Applies size to left */
  left?: SpacingType;
  /** Applies size to right */
  right?: SpacingType;
  /** Applies size to top */
  top?: SpacingType;
  /** Applies size to bottom */
  bottom?: SpacingType;
};


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