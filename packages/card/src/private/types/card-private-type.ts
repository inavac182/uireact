export interface UiPrivateCard {
  button?: boolean;
  clickHandler?: (idenfifier: string | undefined) => void;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  image?: string;
  imageHeight?: number;
  imagePosition?: 'top' | 'center' | 'bottom';
  identifier?: string;
  link?: string;
  linkType?: 'internal' | 'external';
  padded?: boolean;
}
