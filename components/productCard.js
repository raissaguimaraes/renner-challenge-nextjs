import AddToCartButton from './addToCartButton';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

const ProductCard = ({ product }) => {

  return (
    <Grid container component="image">
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: `url(${product.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
         {product.name}
        </Typography>

        <Box sx={{ mt: 1 }}>
            <Typography component="legend">Avaliação</Typography>
            <Rating name="avaliacao" />
          <Box sx={{ p: 2}}>
            <Typography component="h1" variant="h5">
            R$ {product.price}
            </Typography>
          </Box>
          <Box sx={{ p: 2}}>
            <Typography>
            <b>Descrição do Produto:</b> 
            {product.description}
            </Typography>
          </Box>
          <Box sx={{ p: 2}}>
            <Typography>
            <b>Descrição do Produto:</b>
              {product.summary}
            </Typography>
          </Box >
          <Box sx={{ p: 2}}>
            <AddToCartButton product={product} />
          </Box>
        </Box>
      </Box>
    </Grid>
    </Grid>
  );
};

export default ProductCard;