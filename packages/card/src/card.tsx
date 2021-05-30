import * as React from 'react';

import { ThemeContext } from '@uireact/foundation';
import { CardWrapper, ContentWrapper, ImageWrapper, StyledLink, StyledExternalLink } from './private';

export interface UiCardProps {
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

export const UiCard: React.FC<UiCardProps> = (props: UiCardProps) => {
  const themeContext = React.useContext(ThemeContext);
  const onClick = React.useCallback(() => {
    if (props.clickHandler) {
      props.clickHandler(props.identifier);
    }
  }, [props.identifier, props.clickHandler]);

  const CardWrapperMemo = React.useMemo(
    () => (
      <CardWrapper
        customTheme={themeContext.theme}
        onClick={!props.link ? onClick : undefined}
        cursorNeeded={props.clickHandler !== undefined}
      >
        {props?.image && (
          <ImageWrapper
            image={props.image}
            imageHeight={props.imageHeight}
            imagePosition={props.imagePosition}
            data-testid="image-wrapper"
          />
        )}
        <ContentWrapper>
          {props?.header}
          {props?.content}
          {props?.footer}
        </ContentWrapper>
      </CardWrapper>
    ),
    [props, themeContext.theme]
  );

  if (props.link) {
    return props.linkType === 'internal' ? (
      <StyledLink to={props.link}>{CardWrapperMemo}</StyledLink>
    ) : (
      <StyledExternalLink href={props.link}>{CardWrapperMemo}</StyledExternalLink>
    );
  }

  return <>{CardWrapperMemo}</>;
};

UiCard.displayName = 'UiCard';
