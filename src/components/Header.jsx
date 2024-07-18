import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
//import Timer from './Timer';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const path = useLocation().pathname;
  const { theme, toggleTheme } = useTheme();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <List>
      <ListItem button component={Link} to="/" selected={path === "/"}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about" selected={path === "/about"}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/contact" selected={path === "/contact"}>
        <ListItemText primary="Contact Us" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            <span className='text-slate-700 font-bold'>
              My Landing Page
            </span>
            {" "}
            <span className='text-slate-700'>
              
            </span>
            
          </Typography>
          <div className="navbar-links">
            <Button color="inherit" component={Link} to="/" selected={path === "/"}>Home</Button>
            <Button color="inherit" component={Link} to="/about" selected={path === "/about"}>About</Button>
            <Button color="inherit" component={Link} to="/contact" selected={path === "/contact"}>Contact Us</Button>
          </div>
          <IconButton
            sx={{
              width: 48,
              height: 40,
              display: { xs: 'none', sm: 'inline-flex' },
              backgroundColor: 'gray',
              borderRadius: '50%',
              color: 'white',
            }}
            onClick={toggleTheme}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
           {/*<MenuIcon />*/} 
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
}