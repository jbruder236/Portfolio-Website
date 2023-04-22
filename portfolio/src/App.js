import React, { useEffect } from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './App.css';

//MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';

//Pages
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';

//Assets
import background from "./assets/background.webp";


/* TODO:
      -Create Theme with Typography variants (white text)
      -Experiment with maxWidth for viewport for entire app
      -
*/


export default function App() {

  

  return (
    <div className="App">

      <Navbar hideOnScroll={false} />

      <section id="about"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(176,128,120,0) 70%, rgba(85,97,122,1) 100%), url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
      }}>
        <Welcome />
      </section>

      <section id="resume"
        style={{ 
          background:  "#55617a",
      }}>
        <Resume />
      </section>

      <section id="skills"
        style={{ 
          background: "#55617a",
      }}>
        <Skills />
      </section>

      <section id="projects"
        style={{ 
          background: "linear-gradient(180deg, rgba(85,97,122,1) 0%, rgba(229,164,148,0.8) 65%)",
      }}>
        <Projects />
      </section>

      <section id="interests"
        style={{ 
          background: "linear-gradient(180deg, rgba(229,164,148,.8) 0%, rgba(125,200,232,1) 30%)",
      }}>
        <Interests />
      </section>

      <section id="contact"
        style={{ 
          background: "linear-gradient(180deg, rgba(125,200,232,1) 0%, rgba(85,97,122,1) 80%)",
      }}>
        <Contact />
      </section>

    </div>
  );
}

function elementInViewport(id) {
  var myElement = document.getElementById(id);
  var myElementHeight = myElement.offsetHeight;
  var bounding = myElement.getBoundingClientRect();

  if (bounding.top >= -myElementHeight && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
      return true;
  } else {
      return false;
  }
}
