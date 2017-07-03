import React, {Component, PropTypes} from 'react';

import AuthService from '../global/authService';
import AppConfig from '../global/appConfig';

import LoginForm from './components/LoginForm';
/**
 * This component renders a faux authentication UI
 *
 * It prompts for the username/password (and gives hints with bouncy arrows)
 * It shows errors if the authentication failed for any reason.
 *
 * The `login` method validates the credentials.
 * Then it sends the user back to the `returnTo` state, which is provided as a resolve data.
 */
class Login extends Component {
  static propTypes = {
    resolves: PropTypes.shape({
      returnTo: PropTypes.object,
    })
  }

  constructor (props) {
    super(props);
    this.usernames = AuthService.usernames;
    this.state = {
      username: AppConfig.emailAddress || '',
      password: 'password',
      authenticating: false,
      errorMessage: ''
    }
  }
  handleChangeCredentials = (credentials) => {
    this.setState(credentials);
  }
  handleLogin = (credentials) => {
    let {transition} = this.props;
    let {returnTo} = this.props.resolves;
    const done = () => this.setState({authenticating:false});
    const showError = (errorMessage) => this.setState({errorMessage});
    const returnToOriginalState = () => transition.router.stateService.go(returnTo.state(), returnTo.params(), { reload: true });

    this.setState({authenticating:true});
    AuthService.authenticate(credentials.username, credentials.password)
      .then(returnToOriginalState)
      .catch((error) => {
        done();
        showError(error);
      });
  }
  render () {
    let {errorMessage, authenticating, username, password} = this.state;
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <h3>Log In</h3>
          <p>(This login screen is for demonstration only... just pick a username, enter 'password' and click <b>"Log in"</b>)</p>
          <hr/>
          <LoginForm
            usernameOptions={this.usernames}
            username={username}
            password={password}
            error={errorMessage}
            loading={authenticating}
            onChangeValues={this.handleChangeCredentials}
            onSubmit={this.handleLogin}
          />
        </div>
      </div>
    );
  }
}

export default Login;