import React from 'react';
import { UIView, useRouter } from '@uirouter/react';

import AuthService from '../global/authService';
import NavHeader from './components/NavHeader';

/**
 * This is the main app component for an authenticated user.
 *
 * This component renders the outermost chrome (application header and tabs, the compose  and logout button)
 * It has a `UIView` viewport for nested states to fill in.
 */
function App() {
  const { stateService } = useRouter();
  const handleLogout = () => {
    AuthService.logout();
    stateService.go('welcome', {}, { reload: true });
  };

  return (
      <div>
        <div className="navheader">
          <NavHeader onLogout={handleLogout}/>
        </div>
        <UIView/>
      </div>
  );
}

export default App;
