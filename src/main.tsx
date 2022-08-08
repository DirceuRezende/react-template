import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledThemeProvider } from './styles/styled-theme-provider';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledThemeProvider>
        <App />
      </StyledThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
