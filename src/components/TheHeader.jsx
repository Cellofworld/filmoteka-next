import Navigation from "./Navigation"
import { navItems } from "@/consts/navigationConst"
import SearchBar from "./SearchBar"
import Logo from "./Logo"
import styles from './styleScss/navigation.module.scss'


function TheHeader() {

  return (
    <header className={styles.navigation_cont }>
      <Logo />
      <Navigation navLinks={navItems} />
      <SearchBar />
    </header>
   
  )
}

export default TheHeader