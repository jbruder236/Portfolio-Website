import React from 'react';

// MUI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

//Assets
import github_logo from "../assets/github_logo.webp";
import instagram_logo from "../assets/instagram_logo.webp";
import email_icon from "../assets/email_icon.webp";



//TODO: Experiment with MUI image lists (Masonry Image List for Project Cards)
export default function Interests(props) {

    return (
        <div style={{minHeight: '50vh', paddingLeft: '5vh', paddingRight: '5vh', paddingBottom: '4vh'}}>
            <Typography variant="h3" color="#FFFFFF" pt={30} pb={10}>
                Contact Me
            </Typography>
            <Grid container justifyContent="center" pb={35}>
                {/*Email, Github, Instagram*/}
                <Grid item xs={3}>
                    <IconButton size="large" href="mailto:james.bruder@uconn.edu">
                        <img src={email_icon} alt="Email Icon" style={{height: '60px'}} />
                    </IconButton>
                </Grid>
                <Grid item xs={3}>
                    <IconButton size="large" href="https://github.com/jbruder236">
                        <img src={github_logo} alt="Github Icon" style={{height: '60px'}} />
                    </IconButton>
                </Grid>
                <Grid item xs={3}>
                    <IconButton size="large" href="https://www.instagram.com/james.bruder/">
                        <img src={instagram_logo} alt="Instagram Icon" style={{height: '60px'}} />
                    </IconButton>
                </Grid>
            </Grid>
            <Typography variant="p" color="#FFFFFF">
                Designed and Built by James Bruder
            </Typography>
        </div>
    )
}