import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
          main: '#6b705c'
      },
      secondary: {
          main: '#b7b7a4'
      }
    }
  });
 
ReactDOM.render(
<ThemeProvider theme={theme}>
<App />
</ThemeProvider>
, document.getElementById('root'));
