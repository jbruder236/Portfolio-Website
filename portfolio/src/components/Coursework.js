import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
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
          <Box sx={{ p: 3 }}>
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
            <Typography variant="p" color="#FFFFFF" align="left">
                {props.description}
            </Typography>
        </Box>
    );
}

export default function CourseworkPanel(props) {

    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabTextColor = "#9382AB"

    return (
        <Box sx={{ display: 'flex', justifyContent: "flex-end" }}>
            <TabPanel value={value} index={1}>
                <Course
                    description="Class Description" 
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Course
                    description="Class Description" 
                />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Course
                    description="Class Description" 
                />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Course
                    description="Class Description" 
                />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Course
                    description="Class Description" 
                />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Course
                    description="Class Description" 
                />
            </TabPanel>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                //textColor="white"
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
                <Tab label="Database Management with SQL" {...a11yProps(3)} disableRipple
                    style={{ 
                        color: value === 3 ? tabTextColor : "",
                    }} />
                <Tab label="Cybersecurity" {...a11yProps(4)} disableRipple
                    style={{ 
                        color: value === 4 ? tabTextColor : "",
                    }} />
                <Tab label="Algorithms" {...a11yProps(4)} disableRipple
                    style={{ 
                        color: value === 5 ? tabTextColor : "",
                    }} />
                <Tab label="Functional Programming" {...a11yProps(4)} disableRipple
                    style={{ 
                        color: value === 6 ? tabTextColor : "",
                    }} />
            </Tabs>
        </Box>
    );
}