import UIRouterReact, {trace} from 'ui-router-react';
import {visualizer} from 'ui-router-visualizer';

import appStates from './main/states';
import prefStates from './prefs/states';
import contactsStates from './contacts/states';
import myMessagesStates from './mymessages/states';

// Create a new instance of the Router
const Router = new UIRouterReact();

// Register states
const allStates = [].concat(appStates, prefStates, contactsStates, myMessagesStates);
allStates.forEach(state => Router.stateRegistry.register(state));

// Global config for router
Router.urlRouterProvider.otherwise(() => "/welcome");

// Register the "requires auth" hook with the TransitionsService
import reqAuthHook from './global/requiresAuth.hook';
Router.transitionService.onBefore(reqAuthHook.criteria, reqAuthHook.callback, {priority: 10});

// Start the router
Router.start();

// Setup the state visualizer
visualizer(Router);