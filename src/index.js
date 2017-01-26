import React from 'react';
import ReactDOM from 'react-dom';
import {UIView, UIRouter} from 'ui-router-react';
import Dialog from './global/components/Dialog';

// polyfill fetch func
import 'whatwg-fetch';

// import styles
import './styles/index.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';

// import routing
import Router from './router.config';

ReactDOM.render(
  <div>
    <UIRouter router={Router}>
      <UIView/>
    </UIRouter>
    <Dialog/>
  </div>,
  document.getElementById('root')
);
