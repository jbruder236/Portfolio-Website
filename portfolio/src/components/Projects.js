import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import background from "../background.png";


function ProjectCard(props) {
    return (
        <div style={{ 
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: '300px',
        }}>
            Project
        </div>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
};


export default function Projects(props) {

    return (
        <div style={{minHeight: '125vh', paddingLeft: '5vh', paddingRight: '5vh'}}>
            <Typography variant="h3" color="#FFFFFF" pt={60}>
                Personal Projects
            </Typography>
            <Grid container spacing={6} mb={10} mt={3}>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title=""
                        subtitle="" 
                        description=""
                        imagePath=""
                        img={null}
                    />
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