import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Optional, only if you have a global stylesheet

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure 'root' matches the ID in `public/index.html`
);
