import React from 'react';

// MUI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import pdf_icon from "../assets/pdf_icon.webp";
import download_icon from "../assets/download_icon.webp";
import ResumePDF from '../assets/Resume.pdf';

//Project Card Pictures
import drone from "../assets/drone.webp";
import LEDcontrolbox from "../assets/LEDcontrolbox.webp";
import retrogaming from "../assets/retrogaming.webp";
import septicsensor from "../assets/septicsensor.webp";
import arcade from "../assets/arcade/arcade.webp";

//Project Pagination Pictures
import arcade_back from "../assets/arcade/arcade_back.webp";
import arcade_inside from "../assets/arcade/arcade_inside.webp";
import arcade_wiring from "../assets/arcade/arcade_wiring.webp";

import ProjectCard from "./ProjectCard.js";


//TODO: Experiment with MUI image lists (Masonry Image List for Project Cards)
export default function Projects(props) {

    return (
        <div style={{minHeight: '125vh', paddingLeft: '5vh', paddingRight: '5vh'}}>
            <Typography variant="h3" color="#FFFFFF" pt={60}>
                Personal Projects
            </Typography>
            <Grid container spacing={4} mt={3}>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title="Arcade Conversion"
                        subtitle="Using an arcade machine to play modern driving simulators."
                        description="Note: code was lost and do not have on github. An arduino was programmed to read all analog inputs from the 
                        arcade machine, including potentiometers for the steering and pedals, and 
                        buttons for the shifter and front-panel buttons. There were several modes 
                        for arduino control for different games/functionality. For instance, Mode 2 
                        allows for flight controls for GTA V. Mode selection is acheived via a 
                        specific button sequence. A modern PC was used to run the games, and so the 
                        arcade machine acted as a controller. Arcade inputs were mapped to a controller 
                        equivalent, and the Arduino emulated a modern controller. The CRT screen was 
                        faulty, and was gutted and replaced with a modern HD display which was mounted inside."
                        img={[arcade, arcade_back, arcade_inside, arcade_wiring]}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title="LED Control Box"
                        subtitle="Custom-built case to house microcontroller w/ GPIO, cooling, screen, and power supplies."
                        description=""
                        img={[LEDcontrolbox]}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title="Septic Burst Detection"
                        subtitle="For installation in waste drainage systems. Commissioned by Fecal Ferry (fecalferry.com)."
                        description=""
                        img={[septicsensor]}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title="Portable Retro Gaming Console"
                        subtitle="3D-Modeled enclosure for Raspberry Pi running RetroPie. Designed like NES w/ case screen insert and internal battery."
                        description=""
                        img={[retrogaming]}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title="Autonomous Drone"
                        subtitle="UAV system built to spec for AUVSI competition. Designed and constructed with HKHS team."
                        description=""
                        img={[drone]}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title="Music-Responsive LEDs"
                        subtitle="Custom-built case to house microcontroller w/ GPIO, cooling, screen, and power supplies"
                        description=""
                        img={[LEDcontrolbox]}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title="MIDI LED Control"
                        subtitle="------"
                        description=""
                        img={[LEDcontrolbox]}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" spacing={1} mt={4} justifyContent="center" alignItems="center">
                        <Typography variant="h5" color="#FFFFFF">
                            Resume Download
                        </Typography>
                        <a href={ResumePDF} download="Resume.pdf">
                            <IconButton size="medium" disableRipple>
                                <img src={pdf_icon} alt="PDF Icon" style={{paddingRight: '6px', height: '40px'}} />
                                <img src={download_icon} alt="Download Icon" style={{height: '40px'}} />
                            </IconButton>
                        </a>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}