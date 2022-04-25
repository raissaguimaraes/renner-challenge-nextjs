import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } from '../../redux/cart.slice';
import styles from '../../styles/cart.module.css';

const Cart = () => {

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Carrinho Vazio!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image </div>
            <div>Nome </div>
            <div>Preço </div>
            <div>Quantidade </div>
            <div>Ações </div>
            <div>Total </div>
          </div>
          {cart.map((item) => (
            <div key={item.id} product={item} className={styles.body}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" />
              </div>
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>R$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Total: R$ {getTotalPrice()}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;