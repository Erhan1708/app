import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { navBar } from "../../constants/index"
import { BsSearch } from "react-icons/bs"
import { FaOpencart } from "react-icons/fa"
import logo from "../../public/logoCalifornia.png"
import styles from "../../scss/navBar.module.scss"

const NavBar = () => {
   const { pathname } = useRouter()
   return (
      <nav className={styles.container__nav}>
         <Link href="/">
            <Image
               src={logo}
               alt="logo"
               placeholder="blur"
            />
         </Link>

         <ul className={styles.content__nav}>
            {navBar.map(item => (
               <li key={item.id}>
                  <Link className={pathname === item.path ? styles.active : null} href={item.path}>{item.title}</Link>
               </li>
            ))}
         </ul>
         <div>
            <BsSearch className={styles.content__nav__icon} />
            <FaOpencart className={styles.content__nav__icon} />
         </div>
      </nav>
   )
}

export default NavBar