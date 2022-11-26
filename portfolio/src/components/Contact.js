import React from 'react';

// MUI
import Typography from '@mui/material/Typography';



//TODO: Experiment with MUI image lists (Masonry Image List for Project Cards)
export default function Interests(props) {

    return (
        <div style={{minHeight: '50vh', paddingLeft: '5vh', paddingRight: '5vh'}}>
            <Typography variant="h3" color="#FFFFFF" pt={30} pb={35}>
                Contact Me
            </Typography>
            <Typography variant="p" color="#FFFFFF">
                Designed and Built by James Bruder
            </Typography>
        </div>
    )
}