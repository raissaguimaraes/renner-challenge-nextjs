import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/Product.module.css';
import Link from 'next/link';
import Image from 'next/image';

const ImageProduct = ({ product }) => {
  const dispatch = useDispatch();
    return(
    <div className={styles.card}>
      <Link href={`/product/${product.code}`}>
        <Image className={styles.image} src={product.image} height={700} width={1300} />
      </Link>
      <div>
        <button hidden={ product.quantity < 1 }
              onClick={() => dispatch(addToCart(product))}
          className={styles.addtocartbutton}
          >
              Add to Cart</button>
      </div>
    </div>
    )
}

export default ImageProduct;