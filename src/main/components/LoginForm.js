import React, { PropTypes } from 'react';

class LoginForm extends React.Component {
  static propTypes = {
    username: PropTypes.string,
    usernameOptions: PropTypes.arrayOf(PropTypes.string),
    password: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool,
    onChangeValues: PropTypes.func,
    onSubmit: PropTypes.func
  }
  handleSubmit = () => {
    let {username, password} = this.props;
    this.props.onSubmit({username, password});
  }
  handleChangeUsername = (event) => {
    this.props.onChangeValues({username:event.target.value, password: this.props.password});
  }
  handleChangePassword = (event) => {
    this.props.onChangeValues({username:this.props.username, password: event.target.value});
  }
  render() {
    let { username, usernameOptions, password, error, loading } = this.props;
    return (
      <div className="login-form">
        <div>
          <label htmlFor="username">Username:</label>
          <select className="form-control"
            name="username"
            id="username"
            value={username}
            onChange={this.handleChangeUsername}>
            <option value="" disabled></option>
            {usernameOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
          {!username ? <i style={{display: 'block', position: 'relative', bottom: '1.8em', marginLeft: '10em', height: 0}} className="fa fa-arrow-left bounce-horizontal"> Choose </i> : null}
        </div>
        <br/>
        <div>
          <label htmlFor="password">Password:</label>
          <input className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChangePassword}/>
          {username && password !== 'password' ? <i style={{position: 'relative', bottom: '1.8em', marginLeft: '5em', height: 0}} className="fa fa-arrow-left bounce-horizontal">Enter '<b>password</b>' here</i> : null}
        </div>
        {error ? <div className="well error">{error}</div> : null}
        <hr/>
        <div>
          <button className="btn btn-primary"
            type="button"
            disabled={loading}
            onClick={this.handleSubmit}>
            {loading ? <i className="fa fa-spin fa-spinner"></i> : null} <span>Log in</span>
          </button>
          {username && password === 'password' ? <i style={{position: 'relative'}} className="fa fa-arrow-left bounce-horizontal"> Click Me!</i> : null}
        </div>
      </div>
    );
  }
}

export default LoginForm;

/*
<div>
<label for="password">Password:</label>
<input class="form-control" type="password" name="password" ng-model="$ctrl.credentials.password">
<i style="position: relative; bottom: 1.8em; margin-left: 5em; height: 0"
ng-hide="!$ctrl.credentials.username || $ctrl.credentials.password == 'password'" class="fa fa-arrow-left bounce-horizontal">
Enter '<b>password</b>' here
</i>
</div>

<div ng-show="$ctrl.errorMessage" class="well error">{{ $ctrl.errorMessage }}</div>

<hr>
<div>
<button class="btn btn-primary" type="button"
ng-disabled="$ctrl.authenticating" ng-click="$ctrl.login($ctrl.credentials)">
<i class="fa fa-spin fa-spinner" ng-show="$ctrl.authenticating"></i> <span>Log in</span>
</button>
<i ng-show="$ctrl.credentials.username && $ctrl.credentials.password == 'password'" style="position: relative;" class="fa fa-arrow-left bounce-horizontal"> Click Me!</i>
</div>
*/