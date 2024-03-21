import styles from './styles/homepage.module.scss';

import { Hero } from './internal';

export default function HomePage() { 
  return (
    <div className={styles.hero}>
      <Hero />
    </div>
  )
}