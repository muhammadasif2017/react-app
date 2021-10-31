import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*
React.createElement(
  "h1", tag
  null, property
  "Header" content
)
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

