import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import Routes from './components/Routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8FB7D6',
      main: '#4796bd',
      dark: '#3d97A8',
    },
    background: {
      default: '#f3f9fb',
    },
  },
  typography: {
    fontFamily: [
      'Lato',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  spacing: factor => `${0.5 * factor}rem`,
  text: {
    color: {
      veryDark: '#122e40',
      dark: '#495d69',
      darkGray: '#333',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
