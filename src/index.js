import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppOld from './App-old';
import AppHooks from './App-hooks';

ReactDOM.render(
  <React.StrictMode>
    {/* <AppOld /> */}
    <AppHooks />
  </React.StrictMode>,
  document.getElementById('root'),
);
