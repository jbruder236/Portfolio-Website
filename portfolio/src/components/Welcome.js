import React from 'react';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import profile_pic from "../assets/profile_pic.webp";


export default function Welcome(props) {

    const imgsize = 250

    return (
        <Container style={{minHeight: '150vh', paddingTop: '25vh'}}>
            <Avatar 
                alt="James Bruder" 
                src={profile_pic}
                sx={{ width: imgsize, height: imgsize, margin: 'auto' }}
            />
            <Typography variant="h3" color="#FFFFFF" mt="15px">
                James Bruder
            </Typography>
            <Typography variant="h6" color="#FFFFFF" mt="8px">
                Computer Science and Engineering Student
                <br/>
                University of Connecticut
            </Typography>
            <p style={{padding: 0, margin: 0, marginTop: 15}}>
                Hi! My name is James and I'm a Senior Computer Science Engineering student at University of Connecticut.
                I will be looking for a software engineering job when I graduate in May 2023. I've worked with ReactJS 
                but have helped teach a Systems Programming class in C. My personal interests include downhill longboarding,
                street skateboarding, and using microcontrollers to build interesting projects. This site is still under 
                construction, but check out my Resume, Skills, and Projects below!
            </p>
        </Container>
    )
}