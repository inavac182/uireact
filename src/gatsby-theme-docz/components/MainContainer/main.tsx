import React from 'react';

import styled from 'styled-components';

type MainContainerProps = {
  children: React.ReactElement;
};

const Div = styled.div`
  width: -webkit-fill-available;
  max-width: 960px;
  padding: 30px 80px 30px 80px;
  margin: 0 auto;

  @media only screen and (max-width: 920px) {
    padding: 30px 30px 30px 30px;
  }
`;

export const MainContainer = ({ children }: MainContainerProps): React.ReactElement => {
  return <Div>{children}</Div>;
};
