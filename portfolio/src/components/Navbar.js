import * as React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

import logo from '../Logo.svg'


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}
  
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



Navbar.propTypes = {
    hideOnScroll: PropTypes.bool.isRequired
};

export default function Navbar(props) {
    if(props.hideOnScroll){
        return (
            <Box sx={{ flexGrow: 1 }}>
              <HideOnScroll {...props}>
                <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src={logo} alt="My Logo" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
              </HideOnScroll>
            </Box>
          );
    }
    else{
        return (
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
                  <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                  >
                      <img src={logo} alt="My Logo" />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      News
                  </Typography>
                  <Button color="inherit">Login</Button>
                  </Toolbar>
              </AppBar>
            </Box>
          );
    }
  }