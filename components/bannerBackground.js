import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import BannerLowestPrice from "./bannerLowestPrice";
import AddToCartButton from "./addToCartButton";

const BannerBackground = ({ product }) => {
    
    return(
        <Box sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <BannerLowestPrice align='center' product={product}/>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <AddToCartButton product={product} />
            </Stack>
          </Container>
        </Box>
    )
}

export default BannerBackground;