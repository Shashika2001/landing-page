import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './ThemeContext';
import ThemedApp from './ThemeApp';

ReactDOM.render(
  <ThemeProvider>
    <ThemedApp />
  </ThemeProvider>,
  document.getElementById('root')
);