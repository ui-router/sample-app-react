import React from 'react';
import PropTypes from 'prop-types';
import { UISref, useSrefActive } from '@uirouter/react';

import AppConfig from '../../global/appConfig';
import AuthService from '../../global/authService';

function NavHeader(props) {
  let isAuthenticated = AuthService.isAuthenticated();
  let emailAddress = AppConfig.emailAddress;
  const handleLogout = () => {
    props.onLogout();
  };

  let Navbar = () => {
    const mymessagesSref = useSrefActive('mymessages', {}, 'active');
    const contactsSref = useSrefActive('contacts', {}, 'active');
    const prefsSref = useSrefActive('prefs', {}, 'active');
    return (
        <ul className="nav nav-tabs">
          <li {...mymessagesSref}><a role="button">Messages</a></li>
          <li {...contactsSref}><a role="button">Contacts</a></li>
          <li {...prefsSref}><a role="button">Preferences</a></li>

          <li className="navbar-right">
            <UISref to={'home'}>
              <button style={{ marginRight: 5 }} className="btn btn-primary fa fa-home"></button>
            </UISref>
            <UISref to={'mymessages.compose'}>
              <button style={{ marginRight: 15 }} className="btn btn-primary"><i className="fa fa-envelope"></i> New
                Message
              </button>
            </UISref>
          </li>

          <li className="navbar-text navbar-right logged-in-user" style={{ margin: '0.5em 1.5em' }}>
            <div>
              {emailAddress} <i className="fa fa-chevron-down"></i>
              <div className="hoverdrop">
                <button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
              </div>
            </div>
          </li>
        </ul>
    );
  };

  return isAuthenticated ? <Navbar/> : <span/>;

}

NavHeader.propTypes = {
  onLogout: PropTypes.func
};

export default NavHeader;
