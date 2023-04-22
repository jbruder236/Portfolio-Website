import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import WorkExperiencePanel from './WorkExperience.js';
import CourseworkPanel from './Coursework.js';


function Education() {
    return (
        <>
        <Box mt={4}>
            <Typography variant="h5" color="#FFFFFF">
                Education
            </Typography>
        </Box>
        <Box mt={1}>
            <Typography variant="p" color="#FFFFFF" align="left">
                University of Connecticut, Storrs CT
                <br/>
                B.S.E Computer Science and Engineering
                <br/>
                Major GPA: 3.36
                <br/>
                Graduation Date: May 2023
            </Typography>
        </Box>
        </>
    );
}

export default function Resume(props) {

    return (
        <div style={{minHeight: '80vh', paddingTop: '25vh', paddingLeft: '5vh', paddingRight: '5vh'}}>
            <Grid container spacing={4} mb={15}>
                <Grid item xs={12} lg={6} xl={4.5} order={{ xs: 1, lg: 1, xl: 1 }}>
                    <WorkExperiencePanel />
                </Grid>
                <Grid item xs={12} xl={3} order={{ xs: 2, lg: 3, xl: 2 }}>
                    <Education />
                </Grid>
                <Grid item xs={12} lg={6} xl={4.5} order={{ xs: 3, lg: 2, xl: 3 }}>
                    <CourseworkPanel />
                </Grid>
            </Grid>
        </div>
    )
}
