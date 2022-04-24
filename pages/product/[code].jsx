import { useRouter } from 'next/router';
import ProductCard from '../../components/productCard';
import styles from '../../styles/Home.module.css'
import { getProductsByCode } from '../api/products/[code]'

const Product = ({ productsByCode }) => {
  const router = useRouter()
  return(
    <main className={styles.container}>
      <h1 className={styles.title}>Results for {router.query.name}</h1>
      <div className={styles.cards}>
          {productsByCode.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </main>
  )

}
  
export default Product;

export async function getServerSideProps(cdx) {
  const code = cdx.query.code;
  const productsByCode = getProductsByCode(code);
  return { props: { productsByCode } };
}