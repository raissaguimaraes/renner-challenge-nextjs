import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import { Button } from '@mui/material';
import { Hidden } from '@mui/material';

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const [hideButton, setHideButton] = React.useState('');
  
  return (
    <div>
        {product.quantity === 0 ? (
          <Button variant='outlined' disabled color="error" onClick={() => dispatch(addToCart(product))}
            >SOLD OUT</Button>) : (
          <Button variant='outlined' color="success" onClick={() => dispatch(addToCart(product))}
          >Adicione ao Carrinho</Button>
        )}   
    </div>
  );
};

export default AddToCartButton;