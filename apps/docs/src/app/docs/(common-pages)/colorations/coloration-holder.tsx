import React from 'react';

import styles from './colorations.module.scss';

type ColorationHolderProps = {
  color: string;
  coloration: 'dark' | 'light';
}

export const ColorationHolder = ({ color, coloration }: ColorationHolderProps) => {
  return (
    <span style={{backgroundColor: coloration === 'dark' ? '#000000' : '#ffffff', borderRadius: '5px', padding: '5px', display: 'inline-block'}}>
      <span style={{ color }}>{color}</span>
    </span>
  )
}

type CustomCardProps = {
  backgroundColor: string;
  children: React.ReactElement;
}

export const CustomCard = ({ children, backgroundColor }: CustomCardProps) => {
  return (
    <div style={{ backgroundColor, padding: "10px", boxSizing: "border-box", borderRadius: "20px" }}>
      {children}
    </div>
  )
}

type CustomTextProps = {
  color: string;
  children: React.ReactElement;
}

export const CustomText = ({color, children}: CustomTextProps) => {
  return (
    <p style={{textWrap:'wrap', color }}>{children}</p>
  )
}

type TertiaryButtonProps = {
  children: React.ReactElement;
}

export const TertiaryButton = ({ children }: TertiaryButtonProps) => {
  return (
    <button className={styles.tertiaryButton}>
      {children}
    </button>
  )
}