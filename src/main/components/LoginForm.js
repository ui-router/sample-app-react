import React from 'react';
import PropTypes from 'prop-types';

function LoginForm(props) {
  let { username, usernameOptions, password, error, loading } = props;
  const handleSubmit = () => {
    let { username, password } = props;
    props.onSubmit({ username, password });
  };

  const handleChangeUsername = (event) => {
    props.onChangeValues({ username: event.target.value, password: props.password });
  };

  const handleChangePassword = (event) => {
    props.onChangeValues({ username: props.username, password: event.target.value });
  };

  return (
      <div className="login-form">
        <div>
          <label htmlFor="username">Username:</label>
          <select className="form-control"
                  name="username"
                  id="username"
                  value={username}
                  onChange={handleChangeUsername}>
            <option value="" disabled></option>
            {usernameOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
          {!username ?
              <i style={{ display: 'block', position: 'relative', bottom: '1.8em', marginLeft: '10em', height: 0 }}
                 className="fa fa-arrow-left bounce-horizontal"> Choose </i> : null}
        </div>
        <br/>
        <div>
          <label htmlFor="password">Password:</label>
          <input className="form-control"
                 type="password"
                 name="password"
                 value={password}
                 onChange={handleChangePassword}/>
          {username && password !== 'password' ?
              <i style={{ position: 'relative', bottom: '1.8em', marginLeft: '5em', height: 0 }}
                 className="fa fa-arrow-left bounce-horizontal">Enter '<b>password</b>' here</i> : null}
        </div>
        {error ? <div className="well error">{error}</div> : null}
        <hr/>
        <div>
          <button className="btn btn-primary"
                  type="button"
                  disabled={loading}
                  onClick={handleSubmit}>
            {loading ? <i className="fa fa-spin fa-spinner"></i> : null} <span>Log in</span>
          </button>
          {username && password === 'password' ?
              <i style={{ position: 'relative' }} className="fa fa-arrow-left bounce-horizontal"> Click Me!</i> : null}
        </div>
      </div>
  );
}

LoginForm.propTypes = {
  username: PropTypes.string,
  usernameOptions: PropTypes.arrayOf(PropTypes.string),
  password: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
  onChangeValues: PropTypes.func,
  onSubmit: PropTypes.func
};

export default LoginForm;
