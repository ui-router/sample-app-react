import React, {Component, PropTypes} from 'react';
import {UISref} from '@uirouter/react';

import ContactDetail from './components/ContactDetail';
/**
* This component renders details for a single contact
*
* A button messages the contact by linking to `mymessages.compose` state passing the email as a state parameter.
* Another button edits the contact by linking to `contacts.contact.edit` state.
*/

class ContactView extends Component {
  static propTypes = {
    resolves: PropTypes.shape({
      contact: PropTypes.object
    })
  }

  render () {
    let {contact} = this.props.resolves;

    // This button has an ui-sref to the mymessages.compose state. The ui-sref provides the mymessages.compose
    // state with an non-url parameter, which is used as the initial message model
    let composeButton = (
      <UISref to={'mymessages.compose'} params={{message: {to: contact.email}}}>
        <button className="btn btn-primary">
          <i className="fa fa-envelope" /><span>Message</span>
        </button>
      </UISref>
    );

    // This button has a relative ui-sref to the contacts.contact.edit state
    let editContactButton = (
      <UISref to={'.edit'}>
        <button className="btn btn-primary">
          <i className="fa fa-pencil" /><span>Edit Contact</span>
        </button>
      </UISref>
    );

    return (
      <div className="contact">
        <ContactDetail contact={contact} />
        {composeButton}
        {' '}
        {editContactButton}
      </div>
    );
  }
}

export default ContactView;