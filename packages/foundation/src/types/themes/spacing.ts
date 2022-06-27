export enum Sizing {
  ONE = 'one',
  two = 'two',
  three = 'three',
  four = 'four',
  five = 'five',
  size = 'six',
  seven = 'seven',
}

export type Spacing = {
  [key in Sizing]: string;
};
