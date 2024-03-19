import styles from "./page.module.css";

import { UiBadge } from '@uireact/badge';

export default function Home() {
  return (
    <main className={styles.main}>
      <UiBadge>Test</UiBadge>
    </main>
  );
}
