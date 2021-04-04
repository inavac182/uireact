export enum StaticElementEnum {
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

export type StaticElementType = {
  [key in StaticElementEnum]?: string;
};
