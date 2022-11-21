import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import WorkExperiencePanel from './WorkExperience.js';



export default function Resume(props) {

    return (
        <div style={{minHeight: '125vh', paddingTop: '25vh', paddingLeft: '5vh', paddingRight: '5vh'}}>
            <Grid container spacing={2} mb={20}>
                <Grid item xs={12} md={5}>
                    <WorkExperiencePanel />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="h5" color="#FFFFFF">
                        Education
                    </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Typography variant="h5" color="#FFFFFF">
                        Relevant Coursework
                    </Typography>
                </Grid>
            </Grid>
            <SkillsPanel />
        </div>
    )
}


//Developer Skills:
function Skill(props) {
    return (
        <Grid item xs={8} sm={6} md={4} lg={3}>
            {props.icon}
            <Typography variant="h5" color="#FFFFFF">
                {props.title}
            </Typography>
            <Typography variant="p" color="#FFFFFF">
                {props.description}
            </Typography>
        </Grid>
    );
}

function SkillsPanel(props) {
    return (
        <>
        <Typography variant="h4" color="#FFFFFF">
            Developer Skills/Tools
        </Typography>
        <Grid container spacing={5} pt={5} justifyContent="center">
            <Skill
                icon={null}
                title="C/C++"
                description="Took Systems Programming and
                taught as a TA. Also took C++
                class and blahh." 
            />
            <Skill
                icon={null}
                title="ReactJS"
                description="Worked on SPA for MLI
                using the ReactJS Framework.
                Got comfortable and learned
                alot of javascript in the process." 
            />
            <Skill
                icon={null}
                title="SQL"
                description="Took Database Management
                course and got comfortable
                creating and managing a DB,
                along with querying." 
            />
            <Skill
                icon={null}
                title="Python"
                description="Used Python for many of
                the projects I’ve worked on.
                Also used for SDP ML project" 
            />
        </Grid>
        </>
    );
}