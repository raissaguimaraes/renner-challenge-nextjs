import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import Image from 'next/image';
import styles from '../styles/Product.module.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles}>
      <Image src={product.image} height={300} width={220} />
        <h4 className={styles.title}>{product.name}</h4>
        <p>{product.description}</p>
        <h4 className={styles.title}>R$ {product.price}</h4>
        <p>{product.summary}</p>
        <button hidden={product.quantity<1}
            onClick={() => dispatch(addToCart(product))}
        className={styles.addtocartbutton}
        >
            Add to Cart</button>
    </div>
  );
};

export default ProductCard;