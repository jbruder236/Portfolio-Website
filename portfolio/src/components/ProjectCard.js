import React from 'react';
import PropTypes from 'prop-types';

// MUI
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';



//TODO: Fix hover styling
export default function ProjectCard(props) {

    const numPics = props.img.length;

    const [cardOpen, setCardOpen] = React.useState(false);
    const handleClickCardOpen = () => { setCardOpen(true) };
    const handleCardClose = () => { setCardOpen(false) };

    const [page, setPage] = React.useState(1);
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <Box onClick={handleClickCardOpen} 
                sx={{
                    backgroundImage: `url(${props.img[0]})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minHeight: '300px',
                    cursor: 'pointer',
                    opacity: 0.75,
                    boxSizing: "border-box",
                    //borderRadius: "1rem",
                    "&:hover": {
                        border: "10px solid rgba(255, 255, 255, 0)",
                        opacity: 1,
                        transition: "all 0.5s",
                        //borderRadius: "3rem",
                      },
                }}
            >
                <Typography variant="h5" color="#E7CF6C" pt={2} pb={1} px={1} style={{opacity: "1"}}>
                    {props.title}
                </Typography>
                <Typography variant="h6" color="#FFFFFF" style={{opacity: 1}}>
                    {props.subtitle}
                </Typography>
            </Box>
            <ProjectPopup
                title={props.title}
                subtitle={props.subtitle}
                open={cardOpen}
                handleClose={handleCardClose}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} md={7}>
                        <Typography variant="p" color="#FFFFFF">
                            {props.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Stack spacing={2} direction="column" alignItems="center">
                            <img src={props.img[page-1]} alt="Project Pic" style={{maxHeight: '45vh'}} />
                            <Pagination count={numPics} page={page} size="large" onChange={handlePageChange} />
                        </Stack>
                    </Grid>
                </Grid>
            </ProjectPopup>
        </>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.array.isRequired,
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

//TODO: Fix dialog width
//TODO: Add transition for dialog open/close
//A dialog with a close button
function ProjectPopup(props) {
	return (
		<Dialog 
            open={props.open} 
            onClose={props.handleClose} 
            fullWidth 
            maxWidth="lg"
            TransitionComponent={Transition}
        >
			<DialogContent sx={{backgroundColor: "#6D676E"}}>
                <Box sx={{display: 'flex', justifyContent: "flex-end"}}>
                    <div onClick={props.handleClose}
                        style={{
                            cursor: 'pointer',
                            fontSize: 'xx-large',
                            fontWeight: '100',
                            color: '',
                    }}>
                        &#x2573;
                    </div>
                </Box>
                <Box mb={1} sx={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
                    <Typography variant="h4" color="#E7CF6C">
                        {props.title}
                    </Typography>
                    <Typography variant="h6" color="#FFFFFF">
                        {props.subtitle}
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