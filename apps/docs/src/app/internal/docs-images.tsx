'use client';
import React from "react";

import Image from "next/image";

import Colima from '../../../public/colima.jpg';
import styled from "styled-components";

const ImageLoader = styled(Image)`
  width: 100%;
  height: auto;
`;

export const ColimaImage = () => {
  return <ImageLoader src={Colima} alt="Home town photo" />
};