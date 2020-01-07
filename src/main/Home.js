import React from 'react';
import { useSref } from "@uirouter/react";

// This is a home component for authenticated users.
// It shows giant buttons which activate their respective pages: Messages, Contacts, Preferences
function Home() {
  const mymessagesSref = useSref('mymessages');
  const contactsSref = useSref('contacts');
  const prefsSref = useSref('prefs');

  return (
      <div>
        <div className="home buttons">
          <button {...mymessagesSref} className="btn btn-primary">
            <h1><i className="fa fa-envelope"/></h1>
            <h1>Messages</h1>
          </button>

          <button {...contactsSref} className="btn btn-primary">
            <h1><i className="fa fa-users"/></h1>
            <h1>Contacts</h1>
          </button>

          <button {...prefsSref} className="btn btn-primary">
            <h1><i className="fa fa-cogs"/></h1>
            <h1>Preferences</h1>
          </button>
        </div>
      </div>
  );
}

export default Home;
