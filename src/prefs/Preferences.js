import React, { useState } from 'react';

import AppConfig from '../global/appConfig';

function Preferences() {
  const [restDelay, setRestDelay] = useState(AppConfig.restDelay);
  const handleResetData = () => {
    sessionStorage.clear();
    document.location.reload(true);
  };

  const handleSavePrefs = () => {
    AppConfig.restDelay = restDelay;
    AppConfig.save();
    document.location.reload(true);
  };

  return (
      <div>
        <div>
          <button className="btn btn-primary" onClick={handleResetData}>
            <i className="fa fa-recycle"></i>{' '}<span>Reset All Data</span>
          </button>
        </div>
        <div>
          <label htmlFor="restDelay">Simulated REST API delay (ms)</label>
          <input type="text" name="restDelay" value={restDelay} onChange={e => setRestDelay(e.target.value)}/>
          <button className="btn btn-primary" onClick={handleSavePrefs}>Save</button>
        </div>
      </div>
  );
}

export default Preferences;
