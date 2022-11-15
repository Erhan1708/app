import Layout from '../components/Layout'
import "../scss/globals.scss"
import "../scss/_404.scss"
import "../scss/_footer.scss"
import "../scss/_products.scss"
import "../scss/_sort.scss"
import "../scss/_navBar.scss"

const MyApp = ({ Component, pageProps }) => (
   <Layout>
      <main>
         <Component {...pageProps} />
      </main>
   </Layout>
)

export default MyApp
