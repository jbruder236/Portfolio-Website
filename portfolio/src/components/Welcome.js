import React from 'react';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import background from "../assets/background.png";
import profile_pic from "../assets/profile_pic.JPG";


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
            <p>
                Hey! My name is James and I'm a Senior Computer Science Engineering student at University of Connecticut.
                I will be looking for a software engineering job when I graduate in May 2023.
                I've worked with ...
                Some personal hobbies/interests are ...

                Technologies I've worked with:
                -React
                -C/C++

                Technologies I'm interested in pursuing further:
                -Python
                -ML/AI
            </p>
        </Container>
    )
}