import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import TailwindCSS - make sure you've imported the CSS file
import App from './App';
import reportWebVitals from './reportWebVitals'; // If you're using Create React App's setup

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
