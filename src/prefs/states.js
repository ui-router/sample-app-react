import Preferences from './Preferences';
/**
 * This state allows the user to set their application preferences
 */
const prefsState = {
  parent: 'app',
  name: 'prefs',
  url: '/prefs',
  component: Preferences,
  // Mark this state as requiring authentication.  See ../global/requiresAuth.hook.js.
  data: { requiresAuth: true }
};

export const states = [prefsState];