import React from 'react';
import { createRoot } from 'react-dom/client';
import { UIRouter, UIView } from '@uirouter/react';
import Dialog from './global/components/Dialog';

// import styles
import './styles/index.css';

// import routing
import {router} from './router.config';

createRoot(document.getElementById('root')).render(
  <UIRouter router={router}>
    <div>
      <UIView/>
      <Dialog/>
    </div>
  </UIRouter>
);
