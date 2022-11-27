import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ pr: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


function Course(props) {
    return (
        <Box mt={2}>
            <Typography variant="h6" color="#000000" sx={{textDecoration: 'underline', mb: 0.5}}>
                Class Description
            </Typography>
            <Typography variant="p" color="#FFFFFF" align="right">
                {props.description}
            </Typography>
        </Box>
    );
}

//TODO: indicate that the left panel is a 'class description'
export default function CourseworkPanel(props) {

    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabTextColor = "#9382AB"

    return (
        <Grid container sx={{ justifyContent: 'flex-end', pt: 2 }}>
            <Grid item xs={6} md={8} lg={5} xl={6}>
                <TabPanel value={value} index={1}>
                    <Course
                        //CSE 2102
                        description="Specification techniques, design methodologies, performance analysis, 
                        and verification techniques. Team-oriented software design and development, and 
                        project management techniques. Use of appropriate design and debugging tools for 
                        a modern programming language." 
                    />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Course
                        //CSE 3100
                        description="Introduction to system-level programming with an emphasis on C programming, 
                        process management and small scale concurrency with multi-threaded programming. 
                        Special attention devoted to proficiency with memory management and debugging 
                        facilities both in a sequential and parallel setting." 
                    />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Course
                        //CSE 3150
                        description="Leveraged existing knowledge of C and covered all the essential 
                        capabilities of the most recent C++ standard, including object-oriented design, 
                        resource management, generic programming with templates, and use of the STL. " 
                    />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Course
                        //CSE 3160
                        description="Fundamental techniques in functional programming. 
                        Side effects are explored for various purposes such as modeling I/O and rendering 
                        stateful objects. Introduces elementary types, control flow, environments and scoping, 
                        closures, and other structural features of typical functional programs."
                    />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Course
                        //CSE 4701
                        description="Fundamentals of database design and data indexing techniques. 
                        Hierarchical, network, and relational data models. Data base design theory. 
                        Query languages, their implementation and optimization. Data base security and 
                        concurrent data base operations."
                    />
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Course
                        //CSE 3140
                        description="Introduction to the design of secure systems. Each unit explored 
                        a system, its design, its vulnerabilities and how to exploit them, culminating 
                        with the creation, implementation and deployment of counter-measures to eliminate 
                        the vulnerabilities."
                    />
                </TabPanel>
            </Grid>
            <Grid item xs={6} md={4} lg={7} xl={6}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        sx: { backgroundColor: "#9382AB", width: 2, left: 0 }
                        }}
                    sx={{ borderLeft: 1, borderColor: 'divider' }}
                >
                    <Typography variant="h5" color="#FFFFFF" pb="10px">
                        Relevant Coursework
                    </Typography>
                    <Tab label="Software Engineering Practices/Paradigms" {...a11yProps(1)} disableRipple 
                        style={{ 
                            color: value === 1 ? tabTextColor : "",
                        }} />
                    <Tab label="Systems Programming" {...a11yProps(2)} disableRipple
                        style={{ 
                            color: value === 2 ? tabTextColor : "",
                        }} />
                    <Tab label="C++ Essentials" {...a11yProps(3)} disableRipple
                        style={{ 
                            color: value === 3 ? tabTextColor : "",
                        }} />
                    <Tab label="Functional Programming" {...a11yProps(4)} disableRipple
                        style={{ 
                            color: value === 4 ? tabTextColor : "",
                        }} />
                    <Tab label="Database Management with SQL" {...a11yProps(5)} disableRipple
                        style={{ 
                            color: value === 5 ? tabTextColor : "",
                        }} />
                    <Tab label="Cybersecurity" {...a11yProps(6)} disableRipple
                        style={{ 
                            color: value === 6 ? tabTextColor : "",
                        }} />
                </Tabs>
            </Grid>
        </Grid>
    );
}