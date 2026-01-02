import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter, UIView } from '@uirouter/react';
import Dialog from './global/components/Dialog';

// import styles
import './styles/index.css';

// import routing
import {router} from './router.config';

ReactDOM.render(
  <UIRouter router={router}>
    <div>
      <UIView/>
      <Dialog/>
    </div>
  </UIRouter>,
  document.getElementById('root')
);
