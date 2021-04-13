import React from 'react';
import ReactDOM from 'react-dom';
import "./css/style.css";
import App from './App';
import { ThemeProvider } from './ThemeContext';


ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


