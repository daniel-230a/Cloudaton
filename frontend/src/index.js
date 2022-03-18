import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import { ThemeProvider } from '@mui/material';
import main_theme from './assets/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={main_theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


