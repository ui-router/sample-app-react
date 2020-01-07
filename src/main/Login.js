import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AuthService from '../global/authService';
import AppConfig from '../global/appConfig';

import LoginForm from './components/LoginForm';
import { useRouter } from "@uirouter/react";

/**
 * This component renders a faux authentication UI
 *
 * It prompts for the username/password (and gives hints with bouncy arrows)
 * It shows errors if the authentication failed for any reason.
 *
 * The `login` method validates the credentials.
 * Then it sends the user back to the `returnTo` state, which is provided as a resolve data.
 */
function Login({ returnTo }) {
  const { stateService } = useRouter();
  const usernames = AuthService.usernames;
  const [authenticating, setAuthenticating] = useState(false);
  const [username, setUsername] = useState(AppConfig.emailAddress || '');
  const [password, setPassword] = useState('password');
  const [errorMessage, setErrorMessage] = useState('');

  const returnToOriginalState = () => {
    stateService.go(returnTo.state(), returnTo.params(), { reload: true });
  };

  const handleChangeCredentials = ({ username, password}) => {
    setUsername(username);
    setPassword(password);
  };

  const handleLogin = ({ username, password }) => {
    setAuthenticating(true);
    AuthService.authenticate(username, password)
        .then(returnToOriginalState)
        .catch((error) => {
          setAuthenticating(false);
          setErrorMessage(error);
        });
  };

  return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <h3>Log In</h3>
          <p>(This login screen is for demonstration only... just pick a username, enter 'password' and click <b>"Log in"</b>)</p>
          <hr/>
          <LoginForm
              usernameOptions={usernames}
              username={username}
              password={password}
              error={errorMessage}
              loading={authenticating}
              onChangeValues={handleChangeCredentials}
              onSubmit={handleLogin}
          />
        </div>
      </div>
  );
}

Login.propTypes = {
  returnTo: PropTypes.object,
};

export default Login;
