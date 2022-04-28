import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/Product.module.css';

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles}>
        <button hidden={product.quantity<1}
          onClick={() => dispatch(addToCart(product))}
          className={styles.addtocartbutton}
        >
          Add to Cart</button>
    </div>
  );
};

export default AddToCartButton;