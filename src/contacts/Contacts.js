import React from 'react';
import PropTypes from 'prop-types';
import { UIView } from '@uirouter/react';

import ContactList from './components/ContactList';

/**
 * This component renders the contacts page.
 *
 * On the left is the list of contacts.
 * On the right is the ui-view viewport where contact details appear.
 */
function Contacts(props) {
  let { contacts } = props;
  return (
      <div className="my-contacts flex-h">
        <ContactList contacts={contacts} className="flex nogrow"/>
        <UIView><h4 style={{ margin: '1em 2em' }}>Select a contact</h4></UIView>
      </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default Contacts;
