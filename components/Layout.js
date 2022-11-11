import Footer from "./Footer"
import Header from "./Headers/Header"

const Layout = ({ children }) => (
   <>
      <Header />
      {children}
      <Footer />
   </>
)


export default Layout