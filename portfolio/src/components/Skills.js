import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import c_logo from '../assets/C_logo.webp';
import react_logo from '../assets/react_logo.webp';
import sql_logo from '../assets/sql_logo.webp';
import python_logo from '../assets/python_logo.webp';
import git_logo from '../assets/git_logo.webp';
import arduino_logo from '../assets/arduino_logo.webp';
import raspberry_logo from '../assets/raspberry_logo.webp';
import breadboard_icon from '../assets/breadboard_icon.webp';
import CLI_icon from '../assets/CLI_icon.webp';



//TODO: Investigate Grid container maxWidth and content centering
export default function SkillsPanel(props) {
    return (
        <div style={{minHeight: '100vh', paddingTop: '10vh', paddingLeft: '5vh', paddingRight: '5vh'}}>
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
        </div>
    );
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