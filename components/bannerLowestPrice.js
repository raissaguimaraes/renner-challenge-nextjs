import styles from '../styles/Product.module.css';

const BannerLowestPrice = ({ product }) => {
  const lowestPrice = Math.min(...product.map(product => (product.price)));

  const lowestProductImage = product.filter(product => product.price == lowestPrice);
  return (
    <div className={styles}>
        {lowestProductImage.map((product)=> (
          <a href={`/product/${product.code}`} key="link">
          <img src={product.image} key={product.id} height={300} width={220} />
          </a>
        ))}
        </div>
  );
};

export default BannerLowestPrice;