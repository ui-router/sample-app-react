import React, {Component} from 'react';

import AppConfig from '../global/appConfig';

class Preferences extends Component {
  constructor (props) {
    super(props);
    this.state = {
      restDelay: AppConfig.restDelay
    }
  }
  handleResetData = () => {
    sessionStorage.clear();
    document.location.reload(true);
  }
  handleSavePrefs = () => {
    AppConfig.restDelay =  this.state.restDelay;
    AppConfig.save();
    document.location.reload(true);
  }
  handleRestDelayChange = (e)=> {
    this.setState({restDelay:e.target.value});
  }
  render() {
    return (
      <div>
        <div>
          <button className="btn btn-primary" onClick={this.handleResetData}>
            <i className="fa fa-recycle"></i>{' '}<span>Reset All Data</span>
          </button>
        </div>
        <div>
          <label htmlFor="restDelay">Simulated REST API delay (ms)</label>
          <input type="text" name="restDelay" value={this.state.restDelay} onChange={this.handleRestDelayChange} />
          <button className="btn btn-primary" onClick={this.handleSavePrefs}>Save</button>
        </div>
      </div>
    );
  }
}

export default Preferences;