import Image from 'next/image';
import styles from '../styles/addCartButton.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles}>
      <Image src={product.image} height={300} width={220} />
      <h4 className={styles.title}>{product.productName}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button className={styles.button}>Add to Cart</button>
      <p>{product.summary}</p>
    </div>
  );
};

export default ProductCard;