import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter basename={import.meta.env.BASE_URL} location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
