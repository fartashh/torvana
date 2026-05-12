import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    {/* basename must match vite.config.js base (without trailing slash) */}
    <BrowserRouter basename="/torvana">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
