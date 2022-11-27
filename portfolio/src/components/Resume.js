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

import c_logo from '../assets/C_logo.PNG';
import react_logo from '../assets/react_logo.png';
import sql_logo from '../assets/sql_logo.png';
import python_logo from '../assets/python_logo.png';
import git_logo from '../assets/git_logo.png';
import arduino_logo from '../assets/arduino_logo.png';
import raspberry_logo from '../assets/raspberry_logo.png';
import breadboard_icon from '../assets/breadboard_icon.png';
import CLI_icon from '../assets/CLI_icon.png';


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

//TODO: Make Skills its own component
export default function Resume(props) {

    return (
        <div style={{minHeight: '100vh', paddingTop: '25vh', paddingLeft: '5vh', paddingRight: '5vh'}}>
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
                iconWidth="240px"
                title="C/C++"
                description="Learned Systems Programming in C and later taught as a teaching assistant.
                Also took a course on C++ Essentials which taught programming in multiple paradigms 
                simulataneously."
            />
            <Skill
                icon={react_logo}
                iconWidth="145px"
                title="ReactJS"
                description="Worked on SPA for Media Links Inc. using ReactJS. Got very comfortable 
                with javascript in the process, learning about asynchronous behaviors and state management for 
                a complex hardware API."
            />
            <Skill
                icon={sql_logo}
                iconWidth="150px"
                title="SQL"
                description="Learned database management using SQL. Familiar with creating a DB, 
                writing queries, managing keys and constraints, and the MySQL RDBMS."
            />
            <Skill
                icon={python_logo}
                iconWidth="150px"
                title="Python"
                description="Used in many of the projects I've worked on for quick prototyping and 
                powerful libraries. Also used for Senior Design Project to implement a Deep Learning model." 
            />
            <Skill
                icon={git_logo}
                iconWidth="145px"
                title="Git"
                description="I became proficient in git for version control and collaboration at Media Links Inc. 
                I also began maintaining my own repos for personal projects and class code." 
            />
            <Skill
                icon={CLI_icon}
                iconWidth="150px"
                title="Unix CLI"
                description="Proficiency from cybersecurity class, raspberry pi usage via SSH, virtual 
                machines for C and C++ development, and frequent personal use." 
            />
            <Skill
                icon={arduino_logo}
                iconWidth="150px"
                title="Arduino"
                description="These microcontrollers have allowed me to cheaply and quickly develop prototypes 
                for hardware/software interfaces. Used in the Arcade Conversion project." 
            />
            <Skill
                icon={raspberry_logo}
                iconWidth="150px"
                title="Raspberry Pi"
                description="I make frequent use of these single-board computers for various projects.
                I love their low cost, GPIO usability, and low-effort configuration." 
            />
            <Skill
                icon={breadboard_icon}
                iconWidth="150px"
                title="Circuits"
                description="Electronics skills include breadboarding, soldering, and circuit analysis. 
                Circuits are often integrated with software in my personal projects." 
            />
        </Grid>
        </>
    );
}

//Skill Ideas: Arduino, RPi ---
//Linux CLI/Bash shell/Unix shell --- Exposure in cybersecurity and constant use
//Breadboarding/soldering/electronics --- Prototyping and hardware interfaces for coding projects to come to life