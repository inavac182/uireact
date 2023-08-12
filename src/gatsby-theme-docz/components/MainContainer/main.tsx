import React from 'react';

import styled from 'styled-components';

type MainContainerProps = {
  children: React.ReactElement;
};

const Div = styled.div`
  position: 'relative';
  maxwidth: 960;
  padding: 30px 80px 30px 80px;
`;

export const MainContainer = ({ children }: MainContainerProps): React.ReactElement => {
  return <Div>{children}</Div>;
};
