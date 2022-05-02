import { getProducts } from './api/products/index';
import Carousel from 'react-multi-carousel';
import AddToCartButton from '../components/addToCartButton';
import Box from '@mui/material/Box';
import Banner from '../components/banner';
import "react-multi-carousel/lib/styles.css";


const Home = ({products}) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
    
    return( 
      <Box sx={{ bgcolor: '#f4f4f4'}} >
      <Banner product={products}/>
      <Box sx={{ bgcolor: '#f4f4f4'}} >
          <Carousel 
            ssr={true}
            responsive={responsive} 
            renderButtonGroupOutside={true}
            
            >
          {products.map((product) => {
                return (
                <div key="div_card" className="image-item">
                  <a href={`/product/${product.code}`}>
                  <img
                    draggable={false}
                    style={{ width: "100%", height: "100%" }}
                    src={product.image}
                  /></a> 
                  <AddToCartButton product={product} />
                </div>
                )
            })}
          </Carousel>
        </Box>
      </Box>
    )
}
  
export default Home;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
