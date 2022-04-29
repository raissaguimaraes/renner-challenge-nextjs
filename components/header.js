import * as React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';

function Header() {
    const cart = useSelector((state) => state.cart);

    const getItemsCount = () => {
      return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };

  return (
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: '#0e0000' }}>
          <IconButton href="/" sx={{ p: 1 }}>
            <Avatar alt="home" src='./logo.ico' />
          </IconButton>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                Renner Front End Challenge
            </Typography>
            <Button variant="text" href="/"  spacing={2} style={{ color: '#eceff6'}}>Home</Button>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={getItemsCount()} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default Header;