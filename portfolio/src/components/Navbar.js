import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { HashLink, NavHashLink } from 'react-router-hash-link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

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
    -Fix Link spacing for all screen sizes (hide/other nav if viewport is too narrow)
    -Create transition for active section switch
*/

Navbar.propTypes = {
    hideOnScroll: PropTypes.bool.isRequired
};

export default function Navbar(props) {


    const [section, setSection] = React.useState('about');
    var currentPage = 'about';
    useEffect(() => {
        const onScroll = (event) => {
            let about = elementInViewport('about');
            let resume = elementInViewport('resume');
            let skills = elementInViewport('skills');
            let projects = elementInViewport('projects');
            let interests = elementInViewport('interests');
            let contact = elementInViewport('contact');
            let page;
            if(contact)
              page = 'contact';
            else if(interests)
              page = 'interests';
            else if(projects)
              page = 'projects';
            else if(skills)
              page = 'skills';
            else if(resume)
              page = 'resume';
            else if(about)
              page = 'about';  
            if(currentPage !== page) {
              currentPage = page
              setSection(currentPage);
              console.log("Current Page: " + currentPage);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
          window.removeEventListener('scroll', onScroll);
        }
      }, []);


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
                            href="https://jamesbruder.com/"
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
                        width: 'min(40%, 550px)',
                        mr: '20px',
                        }}>
                            <HashLink smooth to="/#about" style={{textDecoration: section==='about' ? "underline" : "none", color: "#FFFFFF"}}>
                                About
                            </HashLink>
                            <HashLink smooth to="/#resume" style={{textDecoration: section==='resume' ? "underline" : "none", color: "#FFFFFF"}}>
                                Resume
                            </HashLink>
                            <HashLink smooth to="/#skills" style={{textDecoration: section==='skills' ? "underline" : "none", color: "#FFFFFF"}}>
                                Skills
                            </HashLink>
                            <HashLink smooth to="/#projects" style={{textDecoration: section==='projects' ? "underline" : "none", color: "#FFFFFF"}}>
                                Projects
                            </HashLink>
                            <HashLink smooth to="/#interests" style={{textDecoration: section==='interests' ? "underline" : "none", color: "#FFFFFF"}}>
                                Interests
                            </HashLink>
                            <HashLink smooth to="/#contact" style={{textDecoration: section==='contact' ? "underline" : "none", color: "#FFFFFF"}}>
                                Contact
                            </HashLink>
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
                        href="https://jamesbruder.com/"
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
                    width: 'min(40%, 550px)',
                    mr: '20px',
                    }}>
                        <HashLink smooth to="/#about" style={{textDecoration: section==='about' ? "underline" : "none", color: "#FFFFFF"}}>
                                About
                        </HashLink>
                        <HashLink smooth to="/#resume" style={{textDecoration: section==='resume' ? "underline" : "none", color: "#FFFFFF"}}>
                            Resume
                        </HashLink>
                        <HashLink smooth to="/#skills" style={{textDecoration: section==='skills' ? "underline" : "none", color: "#FFFFFF"}}>
                                Skills
                            </HashLink>
                        <HashLink smooth to="/#projects" style={{textDecoration: section==='projects' ? "underline" : "none", color: "#FFFFFF"}}>
                            Projects
                        </HashLink>
                        <HashLink smooth to="/#interests" style={{textDecoration: section==='interests' ? "underline" : "none", color: "#FFFFFF"}}>
                            Interests
                        </HashLink>
                        <HashLink smooth to="/#contact" style={{textDecoration: section==='contact' ? "underline" : "none", color: "#FFFFFF"}}>
                            Contact
                        </HashLink>
                    </Box>
                </Toolbar>
            </AppBar>
          );
    }
  }

  function elementInViewport(id) {
    var myElement = document.getElementById(id);
    var myElementHeight = myElement.offsetHeight;
    var bounding = myElement.getBoundingClientRect();
  
    if (bounding.top >= -myElementHeight && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
        return true;
    } else {
        return false;
    }
  }