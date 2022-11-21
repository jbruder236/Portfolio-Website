import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import WorkExperiencePanel from './WorkExperience.js';
import CourseworkPanel from './Coursework.js';

import c_logo from '../C_logo.PNG';
import react_logo from '../react_logo.png';
import sql_logo from '../sql_logo.png';
import python_logo from '../python_logo.png';


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
        <div style={{minHeight: '100vh', paddingTop: '25vh', paddingLeft: '5vh', paddingRight: '5vh'}}>
            <Grid container spacing={4} mb={15}>
                <Grid item xs={12} md={4.5}>
                    <WorkExperiencePanel />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Education />
                </Grid>
                <Grid item xs={12} md={4.5}>
                    <CourseworkPanel />
                </Grid>
            </Grid>
            <SkillsPanel />
        </div>
    )
}


function Skill(props) {
    return (
        <Grid item xs={8} sm={6} md={4} lg={3}>
            <img src={props.icon} alt="Skill Icon" style={{maxWidth: props.iconWidth}} />
            <Typography variant="h5" color="#FFFFFF">
                {props.title}
            </Typography>
            <Typography variant="p" color="#FFFFFF">
                {props.description}
            </Typography>
        </Grid>
    );
}

//TODO: Investigate Grid container maxWidth and content centering
function SkillsPanel(props) {
    return (
        <>
        <Typography variant="h3" color="#FFFFFF">
            Developer Skills/Tools
        </Typography>
        <Grid container spacing={8} pt={8} justifyContent="center">
            <Skill
                icon={c_logo}
                iconWidth="250px"
                title="C/C++"
                description="Took Systems Programming and
                taught as a TA. Also took C++
                class and blahh." 
            />
            <Skill
                icon={react_logo}
                iconWidth="150px"
                title="ReactJS"
                description="Worked on SPA for MLI
                using the ReactJS Framework.
                Got comfortable and learned
                alot of javascript in the process." 
            />
            <Skill
                icon={sql_logo}
                title="SQL"
                description="Took Database Management
                course and got comfortable
                creating and managing a DB,
                along with querying." 
            />
            <Skill
                icon={python_logo}
                title="Python"
                description="Used Python for many of
                the projects I've worked on.
                Also used for SDP ML project" 
            />
        </Grid>
        </>
    );
}