import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import Image from 'next/image';
import styles from '../styles/Product.module.css';
import AddToCartButton from './addToCartButton';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles}>
      <Image src={product.image} height={300} width={220} />
        <h4 className={styles.title}>{product.name}</h4>
        <p>{product.description}</p>
        <h4 className={styles.title}>R$ {product.price}</h4>
        <p>{product.summary}</p>
        <AddToCartButton product={product}/>
    </div>
  );
};

export default ProductCard;