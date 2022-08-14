import logo from './logo.svg';
import './App.css';
import Typography from '@mui/material/Typography';

function App() {

  // Add this in your component file
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Typography> Hello World! </Typography>
      </header>
    </div>
  );
}

export default App;
