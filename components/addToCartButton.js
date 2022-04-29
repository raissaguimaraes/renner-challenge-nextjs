import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
 //
  return (
    <div>
        <button hidden={product.quantity<1}
          className='button-3'
          onClick={() => dispatch(addToCart(product))}
        >
          Adicione ao Carrinho</button>
    </div>
  );
};

export default AddToCartButton;