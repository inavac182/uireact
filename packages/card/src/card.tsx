import * as React from 'react';

import { ThemeContext } from '@uireact/foundation';
import { CardWrapper, UiPrivateCard, ContentWrapper, ImageWrapper, StyledLink, StyledExternalLink } from './private';

export type UiCardProps = UiPrivateCard & {
  children?: React.ReactNode;
  className?: string;
  testId?: string;
};

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
          {props?.children}
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
