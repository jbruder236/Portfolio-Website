import React from 'react';

// MUI
import Typography from '@mui/material/Typography';

import alt_logo from "../assets/alt_logo.png";



//TODO: Experiment with MUI image lists (Masonry Image List for Project Cards)
export default function Interests(props) {

    return (
        <div style={{minHeight: '125vh', paddingLeft: '5vh', paddingRight: '5vh'}}>
            <Typography variant="h3" color="#FFFFFF" pt={40}>
                Interests
            </Typography>
            <img src={alt_logo} alt="Alt Logo" />
        </div>
    )
}