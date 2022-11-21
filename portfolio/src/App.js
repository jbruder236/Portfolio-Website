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

//Assets
import logo from './reactLogo.svg';
import background from "./background.png";


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

      //Placeholder Div
      <div style={{minHeight: '20vh'}} />

    </div>
  );
}

export default App;
