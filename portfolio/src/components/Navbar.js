import * as React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Link from '@mui/material/Link';

import logo from '../assets/Logo.svg'


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


/* TODO:
    -Remove duplicated code for scroll variant
    -Have IconButton redirect to jamesbruder.com
    -Link underlining using state and link hash navigation
    -Fix Link spacing for all screen sizes (hide/other nav if viewport is too narrow)
*/

Navbar.propTypes = {
    hideOnScroll: PropTypes.bool.isRequired
};

export default function Navbar(props) {
    if(props.hideOnScroll){
        return (
            <HideOnScroll {...props}>
                <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none', paddingTop: '5px'}}>
                    <Toolbar sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            disableRipple
                        >
                            <img src={logo} alt="My Logo" />
                            <Typography variant="h6">
                                James Bruder
                            </Typography>
                        </IconButton>

                        <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        justifyContent: 'space-between',
                        width: '30%',
                        mr: '20px',
                        }}>
                            <Link href="#About" underline="always" color="#FFFFFF">
                                About
                            </Link>
                            <Link href="#Resume" underline="none" color="#FFFFFF">
                                Resume
                            </Link>
                            <Link href="#Projects" underline="none" color="#FFFFFF">
                                Projects
                            </Link>
                            <Link href="#Interests" underline="none" color="#FFFFFF">
                                Interests
                            </Link>
                            <Link href="#Contact" underline="none" color="#FFFFFF">
                                Contact
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
          );
    }
    else{
        return (
            <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none', paddingTop: '5px'}}>
                <Toolbar sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        disableRipple
                    >
                        <img src={logo} alt="My Logo" />
                        <Typography variant="h6">
                            James Bruder
                        </Typography>
                    </IconButton>

                    <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    width: '30%',
                    mr: '20px',
                    }}>
                        <Link href="#About" underline="always" color="#FFFFFF">
                            About
                        </Link>
                        <Link href="#Resume" underline="none" color="#FFFFFF">
                            Resume
                        </Link>
                        <Link href="#Projects" underline="none" color="#FFFFFF">
                            Projects
                        </Link>
                        <Link href="#Interests" underline="none" color="#FFFFFF">
                            Interests
                        </Link>
                        <Link href="#Contact" underline="none" color="#FFFFFF">
                            Contact
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
          );
    }
  }