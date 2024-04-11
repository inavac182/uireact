'use client';
import React from 'react';

import styled from 'styled-components';

import { ColorToken } from '@uireact/foundation';

const Svg = styled.svg`
  z-index: 10;
  position: relative;  
  overflow-x: hidden;
`;

type SeparatorProps = {
  weight?: ColorToken;
}

export const Separator = ({ weight = '100' }: SeparatorProps) => (
  <Svg id="visual" viewBox="0 0 3500 300" width="3500" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <path d="M0 241L18.8 230.5C37.7 220 75.3 199 113 168.3C150.7 137.7 188.3 97.3 226 73.8C263.7 50.3 301.3 43.7 339 72.7C376.7 101.7 414.3 166.3 452 172.5C489.7 178.7 527.3 126.3 564.8 97.8C602.3 69.3 639.7 64.7 677.2 81.3C714.7 98 752.3 136 790 149.7C827.7 163.3 865.3 152.7 903 127.8C940.7 103 978.3 64 1016 83.2C1053.7 102.3 1091.3 179.7 1129 208.5C1166.7 237.3 1204.3 217.7 1242 201.8C1279.7 186 1317.3 174 1355 174.5C1392.7 175 1430.3 188 1468 173.8C1505.7 159.7 1543.3 118.3 1581 126C1618.7 133.7 1656.3 190.3 1693.8 191.2C1731.3 192 1768.7 137 1806.2 111.2C1843.7 85.3 1881.3 88.7 1919 78.7C1956.7 68.7 1994.3 45.3 2032 72.3C2069.7 99.3 2107.3 176.7 2145 178.2C2182.7 179.7 2220.3 105.3 2258 94.8C2295.7 84.3 2333.3 137.7 2371 168.7C2408.7 199.7 2446.3 208.3 2484 209.8C2521.7 211.3 2559.3 205.7 2597 184C2634.7 162.3 2672.3 124.7 2710 93.5C2747.7 62.3 2785.3 37.7 2822.8 68.2C2860.3 98.7 2897.7 184.3 2935.2 199C2972.7 213.7 3010.3 157.3 3048 139.2C3085.7 121 3123.3 141 3161 126C3198.7 111 3236.3 61 3274 76C3311.7 91 3349.3 171 3387 181.7C3424.7 192.3 3462.3 133.7 3481.2 104.3L3500 75L3500 301L3481.2 301C3462.3 301 3424.7 301 3387 301C3349.3 301 3311.7 301 3274 301C3236.3 301 3198.7 301 3161 301C3123.3 301 3085.7 301 3048 301C3010.3 301 2972.7 301 2935.2 301C2897.7 301 2860.3 301 2822.8 301C2785.3 301 2747.7 301 2710 301C2672.3 301 2634.7 301 2597 301C2559.3 301 2521.7 301 2484 301C2446.3 301 2408.7 301 2371 301C2333.3 301 2295.7 301 2258 301C2220.3 301 2182.7 301 2145 301C2107.3 301 2069.7 301 2032 301C1994.3 301 1956.7 301 1919 301C1881.3 301 1843.7 301 1806.2 301C1768.7 301 1731.3 301 1693.8 301C1656.3 301 1618.7 301 1581 301C1543.3 301 1505.7 301 1468 301C1430.3 301 1392.7 301 1355 301C1317.3 301 1279.7 301 1242 301C1204.3 301 1166.7 301 1129 301C1091.3 301 1053.7 301 1016 301C978.3 301 940.7 301 903 301C865.3 301 827.7 301 790 301C752.3 301 714.7 301 677.2 301C639.7 301 602.3 301 564.8 301C527.3 301 489.7 301 452 301C414.3 301 376.7 301 339 301C301.3 301 263.7 301 226 301C188.3 301 150.7 301 113 301C75.3 301 37.7 301 18.8 301L0 301Z" fill={`var(--primary-token_${weight})`} stroke-linecap="round" stroke-linejoin="miter"></path>
  </Svg>
);