import React from 'react';
import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

import logo from './logo.svg';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Welcome />
    </div>
  );
}

export default App;
