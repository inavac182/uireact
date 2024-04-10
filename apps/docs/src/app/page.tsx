import styles from './styles/homepage.module.scss';

import { Hero } from './hero-section';
import { Installation } from './install-section';

export default function HomePage() { 
  return (
    <div className={styles.hero}>
      <Hero />
      <Installation />
    </div>
  )
}