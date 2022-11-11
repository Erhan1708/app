import logo from "../public/logoCalifornia.png"
import Image from "next/image"

const Footer = () => {
   return (
      <footer>
         <div className="container">
            <div className="block__Img__Desck">
               <Image
                  src={logo}
                  alt="logo"
                  placeholder="blur"
               />
               <p>
                  Sign up for texts to be notified about our best offers on theperfect gifts.
               </p>
            </div>
            <div>
               <h2>All products</h2>
               <p>Phones</p>
               <p>Watch</p>
               <p>Tablet</p>
               <p>Laptos</p>
            </div>
            <div>
               <h2>Company</h2>
               <p>About</p>
               <p>Support</p>
            </div>
            <div>
               <h2>Support</h2>
               <p>Style Guide</p>
               <p>Licensing</p>
               <p>Change Log</p>
               <p>Contact</p>

            </div>
            <div>
               <h2>Follow Us</h2>
               <p>Instragram</p>
               <p>Facebook</p>
               <p>Likedin</p>
               <p>YouTube</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer