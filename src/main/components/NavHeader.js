import React, {Component, PropTypes} from 'react';
import {UISref, UISrefActive} from '@uirouter/react';

import AppConfig from '../../global/appConfig';
import AuthService from '../../global/authService';

class NavHeader extends Component {
  static propTypes = {
    onLogout: PropTypes.func
  }
  handleLogout = () => {
    this.props.onLogout();
  }

  render () {
    let isAuthenticated = AuthService.isAuthenticated();
    let emailAddress = AppConfig.emailAddress;

    let navbar = (
      <ul className="nav nav-tabs">
        <UISrefActive class={'active'}><UISref to={'mymessages'}><li><a role="button">Messages</a></li></UISref></UISrefActive>
        <UISrefActive class={'active'}><UISref to={'contacts'}><li><a role="button">Contacts</a></li></UISref></UISrefActive>
        <UISrefActive class={'active'}><UISref to={'prefs'}><li><a role="button">Preferences</a></li></UISref></UISrefActive>

        <li className="navbar-right">
          <UISref to={'home'}><button style={{marginRight: 5}}className="btn btn-primary fa fa-home"></button></UISref>
          <UISref to={'mymessages.compose'}><button style={{marginRight: 15}} className="btn btn-primary"><i className="fa fa-envelope"></i> New Message</button></UISref>
        </li>

        <li className="navbar-text navbar-right logged-in-user" style={{margin: '0.5em 1.5em'}}>
          <div>
            {emailAddress} <i className="fa fa-chevron-down"></i>
            <div className="hoverdrop">
              <button className="btn btn-primary" onClick={this.handleLogout}>Log Out</button>
            </div>
          </div>
        </li>
      </ul>
    );

    return isAuthenticated
      ? navbar
      : <span/>;
  }
}

export default NavHeader;