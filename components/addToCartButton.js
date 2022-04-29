import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import { Button } from '@mui/material';

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
        <Button hidden={product.quantity<1}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart</Button>
    </div>
  );
};

export default AddToCartButton;