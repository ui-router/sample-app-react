import React, { Component } from 'react';
import { UIView } from '@uirouter/react';

import AuthService from '../global/authService';
import NavHeader from './components/NavHeader';

/**
 * This is the main app component for an authenticated user.
 *
 * This component renders the outermost chrome (application header and tabs, the compose  and logout button)
 * It has a `UIView` viewport for nested states to fill in.
 */
class App extends Component {
  constructor (props) {
    super(props);
  }

  handleLogout = () => {
    let {transition} = this.props;
    AuthService.logout();
    transition.router.stateService.go('welcome', {}, { reload: true });
  }

  render () {
    return (
      <div>
        <div className="navheader">
          <NavHeader onLogout={this.handleLogout}/>
        </div>
        <UIView/>
      </div>
    );
  }
}

export default App;
