import { useRouter } from 'next/router';
import ProductCard from '../../components/productCard';
import { getProductsByCode } from '../api/products/[code]';

const Product = ({ productsByCode }) => {
  const router = useRouter()
  return(
    <main>
      <div>
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