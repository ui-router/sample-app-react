import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { isEqual, cloneDeep } from 'lodash';
import { useRouter, useSref, useTransitionHook } from '@uirouter/react';

import ContactForm from './components/ContactForm';
import { ContactsStorage } from '../global/dataSources';
import DialogService from '../global/dialogService';

/**
 * The EditContact component
 *
 * This component is used by both `contacts.contact.edit` and `contacts.new` states.
 *
 * The component makes a copy of the contact data for editing by assigning it to the component state.
 * The new copy and original (pristine) copy are used to determine if the contact is "dirty" or not.
 * If the user navigates to some other state while the contact is "dirty", the `uiCanExit` component
 * hook asks the user to confirm navigation away, losing any edits.
 *
 * The Delete Contact button is wired to the `remove` method, which:
 * - asks for confirmation from the user
 * - deletes the resource from REST API
 * - navigates back to the contacts grandparent state using relative addressing `^.^`
 *   the `reload: true` option re-fetches the contacts list from the server
 *
 * The Save Contact button is wired to the `save` method which:
 * - saves the REST resource (PUT or POST, depending)
 * - navigates back to the parent state using relative addressing `^`.
 *   when editing an existing contact, this returns to the `contacts.contact` "view contact" state
 *   when creating a new contact, this returns to the `contacts` list.
 *   the `reload: true` option re-fetches the contacts resolve data from the server
 */
function EditContact(props) {
  const { stateService } = useRouter();
  const contactClone = useMemo(() => cloneDeep(props.contact), []);
  const [contact, setContact] = useState(contactClone);
  const [canExit, setCanExit] = useState(false);

  const uiCanExit = (transition) => {
    if (canExit || isEqual(contact, props.contact)) return true;

    let message = 'You have unsaved changes to this contact.';
    let question = 'Navigate away and lose changes?';
    return DialogService.confirm(message, question);
  };
  useTransitionHook('onBefore', { exiting: '**.contact.edit' }, uiCanExit);

  const save = () => {
    // Save the contact, then go to the parent state (either 'contacts' or 'contacts.contact')
    ContactsStorage.save(contact)
        .then(() => setCanExit(true))
        .then(() => stateService.go('^', null, { reload: true }));
  };

  const remove = () => {
    // Ask for confirmation, then delete the contact, then go to the grandparent state ('contacts')
    let { contact } = state;
    DialogService.confirm(`Delete contact: ${contact.name.first} ${contact.name.last}`)
        .then(() => ContactsStorage.remove(contact))
        .then(() => setCanExit(true))
        .then(() => stateService.go("^.^", null, { reload: true }));
  };

  // A caret (^) is used to denote a reference to the parent state
  const parentStateSref = useSref('^');
  return (
      <div className="contact">
        <ContactForm contact={contact} onContactChange={setContact}/>
        <hr/>
        <div>
          <button {...parentStateSref} className="btn btn-primary">
            <i className="fa fa-close"/>
            <span>Cancel</span>
          </button>
          <button className="btn btn-primary" onClick={save}>
            <i className="fa fa-save"/>
            <span>Save</span>
          </button>
          <button className="btn btn-primary" onClick={remove}>
            <i className="fa fa-close"/>
            <span>Delete</span>
          </button>
        </div>
      </div>
  );
}

EditContact.propTypes = {
  contact: PropTypes.object,
};

export default EditContact;
