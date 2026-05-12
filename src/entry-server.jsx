import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url) {
  const base = import.meta.env.BASE_URL;
  const fullUrl = base === '/' ? url : base.replace(/\/$/, '') + url;

  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter basename={base} location={fullUrl}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
