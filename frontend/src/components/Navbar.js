import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250, backgroundColor: '#a8dadc' }}  // Teal background for the drawer
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" sx={{ color: '#1d3557' }} />
        </ListItem>
        <ListItem button component={Link} to="/qp-generate">
          <ListItemText primary="QP Generate" sx={{ color: '#1d3557' }} />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" sx={{ color: '#1d3557' }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1d3557' }}>  {/* Deep blue background */}
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: { xs: '1rem', sm: '1.5rem' },
              color: '#f1faee'  // Light color for text
            }}
          >
            QP Generator
          </Typography>
          {/* Hamburger Menu for Mobile */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          {/* Buttons for Larger Screens */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ color: '#f1faee', '&:hover': { backgroundColor: '#e63946' } }}  // Light text, red hover effect
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/qp-generate"
              sx={{ color: '#f1faee', '&:hover': { backgroundColor: '#e63946' } }}  // Light text, red hover effect
            >
              QP Generate
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{ color: '#f1faee', '&:hover': { backgroundColor: '#e63946' } }}  // Light text, red hover effect
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
