import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/Header.module.css';
import { BsCart } from 'react-icons/bs';

function Header() {    

  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
    return (  
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>Renner Front End Challenge</h6>
        <ul className={styles.links}>
          <li className={styles.navlink}>
          <Link href="/home">Home</Link>
          </li>
          <li className={styles.navlink}>
           <p><BsCart /> ({getItemsCount()})</p>
          </li>
        </ul>
    </nav>
    );
};

export default Header;