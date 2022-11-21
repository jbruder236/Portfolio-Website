import React from 'react';
//Router Options:
import { HashLink } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';
import './App.css';

//MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//Pages
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Resume from './components/Resume';
import Projects from './components/Projects';

//Assets
import logo from './assets/reactLogo.svg';
import background from "./assets/background.png";


/* TODO:
      -Create Theme with Typography variants (white text)
      -Experiment with maxWidth for viewport for entire app
      -
*/
function App() {

  return (
    <div className="App">

      <Navbar hideOnScroll={false} />

      <div style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(176,128,120,0) 70%, rgba(85,97,122,1) 100%), url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          marginTop: '-16px',
      }}>
        <Welcome />
      </div>

      <div style={{ 
          background: "#55617a",
      }}>
        <Resume />
      </div>

      <div style={{ 
          background: "rgb(85,97,122)",
          background: "linear-gradient(180deg, rgba(85,97,122,1) 0%, rgba(229,164,148,0.8) 65%)",
      }}>
        <Projects />
      </div>

    </div>
  );
}

export default App;
