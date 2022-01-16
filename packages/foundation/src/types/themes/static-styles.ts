export enum StyleProps {
  background = 'background',
  border = 'border',
  contrast = 'contrast',
  font = 'font',
  shadows = 'shadows',
  softBackground = 'softBackground',
  strongBackground = 'strongBackground',
  heading = 'heading',
  paragraph = 'paragraph',
}

export type StaticStyles = {
  [key in StyleProps]?: string;
};
