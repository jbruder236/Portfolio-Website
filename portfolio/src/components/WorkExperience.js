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
          <Box sx={{ pl: 2 }}>
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


function WorkExperience(props) {
    return (
        <>
            <Box mt={1}>
                <Typography variant="p" color="#FFFFFF" sx={{fontStyle: 'italic', textDecoration: 'underline'}}>
                    {props.title} 
                </Typography>
                <br/>
                <Typography variant="p" color="#000000" sx={{fontWeight: 'bold'}}>
                    {props.year}
                </Typography>
            </Box>
            <Box mt={1}>
                <Typography variant="p" color="#FFFFFF">
                    {props.description}
                </Typography>
            </Box>
        </>
    );
}

export default function WorkExperiencePanel(props) {

    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabTextColor = "#9382AB"

    return (
        <Grid container sx={{ pt: 2 }}>
            <Grid item xs={6} md={4} lg={6} xl={5}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        sx: { backgroundColor: "#9382AB", width: 2 }
                        }}
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Typography variant="h5" color="#FFFFFF" pb="10px">
                        Work Experience
                    </Typography>
                    <Tab label="University of Connecticut" {...a11yProps(1)} disableRipple 
                        style={{ 
                            color: value === 1 ? tabTextColor : "",
                        }} />
                    <Tab label="Media Links Inc." {...a11yProps(2)} disableRipple
                        style={{ 
                            color: value === 2 ? tabTextColor : "",
                        }} />
                    <Tab label="Camp Trucking" {...a11yProps(3)} disableRipple
                        style={{ 
                            color: value === 3 ? tabTextColor : "",
                        }} />
                    <Tab label="FedEx" {...a11yProps(4)} disableRipple
                        style={{ 
                            color: value === 4 ? tabTextColor : "",
                        }} />
                </Tabs>
            </Grid>
            <Grid item xs={6} md={8} lg={6} xl={7}>
                <TabPanel value={value} index={1}>
                    <WorkExperience
                        title="Teaching Assistant"
                        year="August 2022 - Present"
                        description="Assisted with a Systems Programming course taught in C. 
                        Individually taught a weekly lab section, graded exam code with 
                        scripts and by hand, and helped students in weekly office hours." 
                    />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <WorkExperience
                        title="Software Engineering Intern"
                        year="Summer 2022"
                        description="Developed a single-page application using ReactJS framework 
                        with a small team. Created and self-assigned bug/feature tickets with weekly progress 
                        reports to a supervisor. Assisted with design of the application and API 
                        during meetings with the Japan hardware team."
                    />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <WorkExperience
                        title="Driver"
                        year="Summer 2021"
                        description="Drove a 26’ box truck across the Northeast as a commercial driver 
                        for a door-to-door luggage service for summer camps. Partnered with individuals 
                        from a diverse staff coming from all over the country." 
                    />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <WorkExperience
                        title="Package Handler"
                        year="June 2021 - April 2022"
                        description="Load trailers on weekends for the FedEx Tuition Assistance Program." 
                    />
                </TabPanel>
            </Grid>
        </Grid>
    );
}