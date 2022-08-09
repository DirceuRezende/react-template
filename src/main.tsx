import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyledThemeProvider } from './styles/styled-theme-provider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledThemeProvider>
        <App />
      </StyledThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
