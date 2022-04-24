import AddCartButton from "../../components/addCartButton"
import styles from '../../styles/Home.module.css'
import { getProducts } from '../api/products/index'
import ImageProduct from "../../components/imageProduct"

const Home = ({products}) => {
    return( 
      <main className={styles.container}>
        <div className={styles.large}>
        {products.map((product) => (
          <ImageProduct key={product.id} product={product} />
        ))}
        </div>
      </main>
        )
  }
  
export default Home;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}