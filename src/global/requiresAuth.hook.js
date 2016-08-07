import AuthService from './authService';
/**
 * This file contains a Transition Hook which protects a
 * route that requires authentication.
 *
 * This hook redirects to /login when both:
 * - The user is not authenticated
 * - The user is navigating to a state that requires authentication
 */

const hook = {
  // Matches if the destination state's data property has a truthy 'requiresAuth' property
  criteria: {
    to: (state) => state.data && state.data.requiresAuth
  },
  // Function that returns a redirect for the current transition to the login state
  // if the user is not currently authenticated (according to the AuthService)
  callback: (transition) => {
    let $state = transition.router.stateService;
    if (!AuthService.isAuthenticated()) {
      return $state.target('login', undefined, { location: false });
    }
  }
}

export default hook;