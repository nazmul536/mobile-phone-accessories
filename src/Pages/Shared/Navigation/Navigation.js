import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Mobile Phone 
          </Typography>
         
          <Link to='/ExploresProducts'> <Button style={{ textDecoration:'none', color:'white', fontWeight:600, fontSize:15}} color="inherit">Explore Now</Button></Link>
          
          <Button  color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default Navigation;