import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import AddToCartButton from "./addToCartButton";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";

const Banner = ({ product }) => {
  const lowestPrice = Math.min(...product.map(product => (product.price)));

  const lowestProductImage = product.filter(product => product.price == lowestPrice);
    return(
      <Box>
        {lowestProductImage.map((product)=> (
        <Link key="image" href={`/product/${product.code}`}>
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.200',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${product.image})`,
          }}
        >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={product.image} alt="image-priority" />}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                R${product.price}
              </Typography> 
            </Box>
          </Grid>
        </Grid>
    </Paper>
    </Link>
    ))}
    </Box>
    )
}

export default Banner;