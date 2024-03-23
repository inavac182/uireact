import React from 'react';

import { Separator } from './separator';

import styles from './section.module.scss';

type SectionProps = {
  children?: React.ReactElement;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <section className={styles.container}>
      {children}
      <Separator />
    </section>
  );
};
