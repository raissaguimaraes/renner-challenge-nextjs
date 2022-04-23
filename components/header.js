import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Header.module.css'

/*<span className={styles.logo}>
            <Image src="/logo_black.png" alt="Renner Logo" width={120} height={32} />
</span>*/

function Header() {    
    return (  
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>Renner Front End</h6>
        <ul className={styles.links}>
          <li className={styles.navlink}>
          <Link href="/home">Home</Link>
          </li>
          <li className={styles.navlink}>
          <Link href="/product">Product</Link>
          </li>
        </ul>
    </nav>
    )
}
export default Header