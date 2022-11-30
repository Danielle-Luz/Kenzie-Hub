import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from "styled-components";
import { theme } from './styles/theme';

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);