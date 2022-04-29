import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const BannerLowestPrice = ({ product }) => {

  const lowestPrice = Math.min(...product.map(product => (product.price)));

  const lowestProductImage = product.filter(product => product.price == lowestPrice);
  return (
    <Card sx={{ maxWidth: 690, align: "center" }}>
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
    </Card>
  );
}

export default BannerLowestPrice;