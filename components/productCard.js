import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import Image from 'next/image';
import AddToCartButton from './addToCartButton';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div >
      <Image src={product.image} height={300} width={220} />
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <h4>R$ {product.price}</h4>
        <p>{product.summary}</p>
        <AddToCartButton product={product}/>
    </div>
  );
};

export default ProductCard;