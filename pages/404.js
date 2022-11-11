import Head from "next/head"
import Link from "next/link"
import Heading from "../components/Heading"

const Error = () => (
   <>
      <Head>
         <title>
            Error
         </title>
      </Head>
         <div className="notfound">
            <div className="notfound__404">
               <Heading text="Oops!" />
               <Heading tag="h2" text="404 - The Page can't be found" />
               <Link href="/">Go TO Homepage</Link>
            </div>
         </div>
   </>

)

export default Error