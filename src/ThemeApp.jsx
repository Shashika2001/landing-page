import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import App from './App';
import { useTheme } from './ThemeContext';

function ThemedApp() {
  const { theme } = useTheme();
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

export default ThemedApp;