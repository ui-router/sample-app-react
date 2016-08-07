import React from 'react';
import ReactDOM from 'react-dom';
import {UIView} from 'ui-router-react';
import Dialog from './global/components/Dialog';

// polyfill fetch func
import 'whatwg-fetch';

// import styles
import './styles/index.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';

// import routing
import './router.config';

ReactDOM.render(
  <div>
    <UIView/>
    <Dialog/>
  </div>,
  document.getElementById('root')
);
