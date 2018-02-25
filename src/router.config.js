import {UIRouterReact, servicesPlugin, hashLocationPlugin} from '@uirouter/react';

import appStates from './main/states';

// Create a new instance of the Router
export const router = new UIRouterReact();
router.plugin(servicesPlugin);
router.plugin(hashLocationPlugin);

// Lazy load visualizer
import('@uirouter/visualizer').then(module => router.plugin(module.Visualizer));

// Register the initial (eagerly loaded) states
appStates.forEach(state => router.stateRegistry.register(state));

// Global config for router
router.urlService.rules.initial({ state: 'welcome' });

// Register the "requires auth" hook with the TransitionsService
import reqAuthHook from './global/requiresAuth.hook';
router.transitionService.onBefore(reqAuthHook.criteria, reqAuthHook.callback, {priority: 10});

import googleAnalyticsHook from './util/ga';
googleAnalyticsHook(router.transitionService);
