import React from 'react';
import './App.css';

//MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//Pages
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

//Assets
import logo from './reactLogo.svg';
import background from "./background.png";


function App() {

  return (
    <div className="App">

      <Navbar hideOnScroll={false} />

      <div style={{ 
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          marginTop: '-16px',
          //minHeight: '100vh',
          //objectFit: 'contain',
      }}>

        <Welcome />
        
      </div>

      //Placeholder Div
      <div style={{minHeight: '100vh'}} />

    </div>
  );
}

export default App;
