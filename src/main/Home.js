import React, {Component, PropTypes} from 'react';
import {UISref} from '@uirouter/react';

// This is a home component for authenticated users.
// It shows giant buttons which activate their respective pages: Messages, Contacts, Preferences
class Home extends Component {
  render () {
    return (
      <div>
      <div className="home buttons">
        <UISref to={'mymessages'}>
          <button className="btn btn-primary">
            <h1><i className="fa fa-envelope"/></h1>
            <h1>Messages</h1>
          </button>
        </UISref>

        <UISref to={'contacts'}>
          <button className="btn btn-primary">
            <h1><i className="fa fa-users"/></h1>
            <h1>Contacts</h1>
          </button>
        </UISref>

        <UISref to={'prefs'}>
          <button className="btn btn-primary">
            <h1><i className="fa fa-cogs"/></h1>
            <h1>Preferences</h1>
          </button>
        </UISref>
      </div>
       </div>
    );
  }
}

export default Home;