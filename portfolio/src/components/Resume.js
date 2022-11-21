import React from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import background from "../background.png";


function ExperiencePanel(props) {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container spacing={2} mb={20}>
            <Grid item xs={4}>
                <Typography variant="h5" color="#FFFFFF">
                    Work Experience
                </Typography>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h5" color="#FFFFFF">
                    Education
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h5" color="#FFFFFF">
                    Relevant Coursework
                </Typography>
            </Grid>
        </Grid>
    );
}

function Skill(props) {
    return (
        <Grid item xs={6} sm={4} md={3}>
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
        <Grid container spacing={5} pt={5}>
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


export default function Resume(props) {

    return (
        <Container style={{minHeight: '125vh', paddingTop: '25vh'}}>
            <ExperiencePanel />
            <SkillsPanel />
        </Container>
    )
}