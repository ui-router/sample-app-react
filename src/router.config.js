import {UIRouterReact, servicesPlugin, hashLocationPlugin} from '@uirouter/react';
import {Visualizer} from '@uirouter/visualizer';

import appStates from './main/states';

// Create a new instance of the Router
export const router = new UIRouterReact();
router.plugin(servicesPlugin);
router.plugin(hashLocationPlugin);
router.plugin(Visualizer);

// Register the initial (eagerly loaded) states
appStates.forEach(state => router.stateRegistry.register(state));

// Global config for router
router.urlService.rules.initial({ state: 'welcome' });

// Register the "requires auth" hook with the TransitionsService
import reqAuthHook from './global/requiresAuth.hook';
router.transitionService.onBefore(reqAuthHook.criteria, reqAuthHook.callback, {priority: 10});

import googleAnalyticsHook from './util/ga';
googleAnalyticsHook(router.transitionService);
