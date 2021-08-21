import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SmartApp} from './components/App.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <SmartApp />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
