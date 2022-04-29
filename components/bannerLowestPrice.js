import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddToCartButton from './addToCartButton';
import { Container } from '@mui/material';


const BannerLowestPrice = ({ product }) => {

  const lowestPrice = Math.min(...product.map(product => (product.price)));

  const lowestProductImage = product.filter(product => product.price == lowestPrice);
  return (
    <Container position fixed>
    <Card sx={{ maxWidth: 690 }}>
        <div>
        {lowestProductImage.map((product)=> (
        <a href={`/product/${product.code}`} key="link">
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                src={product.image}
            />
          </a>
        ))}
        </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        </Typography>
      </CardContent>
      <CardActions>
        <AddToCartButton product={product} />
      </CardActions>
    </Card>
    </Container>
  );
}

export default BannerLowestPrice;