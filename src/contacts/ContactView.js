import React from 'react';
import PropTypes from 'prop-types';
import { useSref } from '@uirouter/react';

import ContactDetail from './components/ContactDetail';

/**
 * This component renders details for a single contact
 *
 * A button messages the contact by linking to `mymessages.compose` state passing the email as a state parameter.
 * Another button edits the contact by linking to `contacts.contact.edit` state.
 */
function ContactView(props) {
  let { contact } = props;

  // This button has an sref to the mymessages.compose state. The sref passes the mymessages.compose
  // state an object parameter 'message' (a non-url parameter) which is used as the initial message model
  const ComposeButton = () => {
    const composeSref = useSref('mymessages.compose', { message: { to: contact.email } });
    return (
        <button {...composeSref} className="btn btn-primary">
          <i className="fa fa-envelope"/><span>Message</span>
        </button>
    );
  };

  // This button has a relative ui-sref to the contacts.contact.edit state
  const EditContactButton = () => {
    const editSref = useSref('.edit');
    return (
        <button {...editSref} className="btn btn-primary">
          <i className="fa fa-pencil"/><span>Edit Contact</span>
        </button>
    );
  };

  return (
      <div className="contact">
        <ContactDetail contact={contact}/>
        <ComposeButton/>
        <EditContactButton/>
      </div>
  );
}

ContactView.propTypes = {
  contact: PropTypes.object,
};

export default ContactView;
