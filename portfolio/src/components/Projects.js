import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


export default function Projects(props) {

    return (
        <div style={{minHeight: '125vh', paddingLeft: '5vh', paddingRight: '5vh'}}>
            <Typography variant="h3" color="#FFFFFF" pt={60}>
                Personal Projects
            </Typography>
            <Grid container spacing={6} mb={10} mt={3}>
                <Grid item xs={12} md={4}>
                    Project
                </Grid>
                <Grid item xs={12} md={4}>
                    Project
                </Grid>
                <Grid item xs={12} md={4}>
                    Project
                </Grid>
                <Grid item xs={12} md={4}>
                    Project
                </Grid>
                <Grid item xs={12} md={4}>
                    Project
                </Grid>
                <Grid item xs={12} md={4}>
                    Project
                </Grid>
            </Grid>
        </div>
    )
}