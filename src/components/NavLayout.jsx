import TheFooter from "./TheFooter"
import TheHeader from "./TheHeader"



function NavLayout({children}) {
  return (
    <>
        <TheHeader />
            {children}
        <TheFooter />
    </>
  )
}

export default NavLayout