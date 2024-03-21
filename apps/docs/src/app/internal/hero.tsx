import { Logo } from './logo';
import styles from './styles/hero.module.scss';

export const Hero = () => { 
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  )
}