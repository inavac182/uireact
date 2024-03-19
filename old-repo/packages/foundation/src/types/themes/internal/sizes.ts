import { TextSize, HeadingLevel } from '../../';

export type HeadingSizes = {
  [key in HeadingLevel]: string;
};

export type TextSizes = {
  [key in TextSize]: string;
};

export type Sizes = {
  headings: HeadingSizes;
  texts: TextSizes;
};
