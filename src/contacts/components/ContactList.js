import React from 'react';
import PropTypes from 'prop-types';
import { useSref, useSrefActive } from '@uirouter/react';

function NewContactButton() {
  // This sref is a relative reference to the contacts.new state.
  const sref = useSref('.new');
  return (
      <a {...sref}>
        <button className="btn btn-primary"><i className="fa fa-pencil"></i><span>New Contact</span></button>
      </a>
  );
}

function ContactLink({ contact }) {
  // When the current state matches the sref's state (and its parameters),
  // useSrefActive applies className="selected" to the anchor tag
  const sref = useSrefActive('.contact', { contactId: contact._id }, "selected");
  const { first, last } = contact.name;
  return <a {...sref}>{`${first} ${last}`}</a>;
}

/**
 * This component renders a list of contacts.
 *
 * At the top is a "new contact" button.
 * Each list item is a clickable link to the `contacts.contact` details substate
 */
function ContactList(props) {
  const { className, contacts } = props;
  return (
      <div className={className}>
        <ul className="selectlist list-unstyled flex nogrow">
          <li><NewContactButton/></li>
          <li>&nbsp;</li>
          {contacts.map(contact => (
              <li key={`${contact.name.first}${contact.name.last}`}>
                <ContactLink contact={contact}/>
              </li>
          ))}
        </ul>
      </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};

export default ContactList;
