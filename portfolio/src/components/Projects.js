import React from 'react';
import PropTypes from 'prop-types';

// MUI
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import drone from "../assets/drone.png";
import LEDcontrolbox from "../assets/LEDcontrolbox.png";
import retrogaming from "../assets/retrogaming.png";
import septicsensor from "../assets/septicsensor.png";
import arcade from "../assets/arcade.PNG";


//A dialog with a close button
function ProjectPopup(props) {
	return (
		<Dialog open={props.open} onClose={props.handleClose}>
			<DialogContent sx={{backgroundColor: "#6D676E"}}>
                <Box mb={1} sx={{display: 'flex', justifyContent: "flex-end"}}>
                    <Button onClick={props.handleClose}>X</Button>
                </Box>
                <Box mb={1} sx={{display: 'flex', justifyContent: "center"}}>
                    <Typography variant="h4" color="#E7CF6C">
                        {props.title}
                    </Typography>
                </Box>
				{props.children}
			</DialogContent>
		</Dialog>
	);
};

ProjectPopup.propTypes = {
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}

//TODO: On hover make cursor select and darken card
function ProjectCard(props) {

    const [cardOpen, setCardOpen] = React.useState(false);
    const handleClickCardOpen = () => { setCardOpen(true); console.log("Open"); };
    const handleCardClose = () => { setCardOpen(false); console.log("Close"); };

    return (
        <>
            <div onClick={handleClickCardOpen} 
            style={{ 
                backgroundImage: `url(${props.img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '300px',
            }}>
                <Typography variant="h5" color="#E7CF6C" pt={2} pb={1} px={1}>
                    {props.title}
                </Typography>
                <Typography variant="h6" color="#FFFFFF">
                    {props.subtitle}
                </Typography>
            </div>
            <ProjectPopup
                title={props.title}
                open={cardOpen}
                handleClose={handleCardClose}
            >
                <Typography variant="h6" color="#FFFFFF">
                    {props.subtitle}
                </Typography>
                <Typography variant="p" color="#FFFFFF">
                    {props.description}
                </Typography>
            </ProjectPopup>
        </>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
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
                        title="Arcade Conversion"
                        subtitle="Using an arcade machine to play modern driving simulators."
                        description="An arduino was programmed to read all analog inputs from the 
                        arcade machine, including potentiometers for the steering and pedals, and 
                        buttons for the shifter and front-panel buttons. There were several modes 
                        for arduino control for different games/functionality. For instance, Mode 2 
                        allows for flight controls for GTA V. Mode selection is acheived via a 
                        specific button sequence. A modern PC was used to run the games, and so the 
                        arcade machine acted as a controller. Arcade inputs were mapped to a controller 
                        equivalent, and the Arduino emulated a modern controller. The CRT screen was 
                        faulty, and was gutted and replaced with a modern HD display which was mounted inside."
                        img={arcade}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title="LED Control Box"
                        subtitle="Custom-built case to house microcontroller w/ GPIO, cooling, screen, and power supplies."
                        description=""
                        img={LEDcontrolbox}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title="Septic Burst Detection"
                        subtitle="For installation in waste drainage systems. Commissioned by Fecal Ferry (fecalferry.com)."
                        description=""
                        img={septicsensor}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title="Portable Retro Gaming Console"
                        subtitle="3D-Modeled enclosure for Raspberry Pi running RetroPie. Designed like NES w/ case screen insert and internal battery."
                        description=""
                        img={retrogaming}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title="Autonomous Drone"
                        subtitle="UAV system built to spec for AUVSI competition. Designed and constructed with HKHS team."
                        description=""
                        img={drone}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title="Music-Responsive LEDs"
                        subtitle="Custom-built case to house microcontroller w/ GPIO, cooling, screen, and power supplies"
                        description=""
                        img={LEDcontrolbox}
                    />
                </Grid>
            </Grid>
        </div>
    )
}