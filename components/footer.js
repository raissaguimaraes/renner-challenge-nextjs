
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

function Footer() {  

    return (        
      <Box sx={{ bgcolor: '#EBEBEB', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        By Raissa Guimarães
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        Using React|Next.js and MUI
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="https://github.com/raissaguimaraes/renner-challenge-nextjs">
          Code Source
        </Link>{' '}
        </Typography>
      </Box>
    )
}
export default Footer