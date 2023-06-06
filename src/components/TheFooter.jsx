import Logo from "./Logo";
import styles from './styleScss/navigation.module.scss'

function TheFooter() {

  return (
   <footer className={styles.footer_wraper}>
    <Logo />
    <div className={styles.footer_desc}>©Все права защищены</div>
   </footer>
  )
}

export default TheFooter