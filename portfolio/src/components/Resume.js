import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import background from "../background.png";


function ExperiencePanel(props) {
    return (
        <div />
    );
}

function SkillsPanel(props) {
    return (
        <div />
    );
}


export default function Resume(props) {

    return (
        <Container style={{minHeight: '100vh', paddingTop: '25vh'}}>
            <Typography variant="h3" color="#FFFFFF" mt="15px">
                James Bruder
            </Typography>
            <Typography variant="h6" color="#FFFFFF" mt="8px">
                Computer Science and Engineering Student
                <br/>
                University of Connecticut
            </Typography>
        </Container>
    )
}