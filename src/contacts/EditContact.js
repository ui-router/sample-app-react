import React, {Component, PropTypes} from 'react';
import {UISref} from '@uirouter/react';
import {isEqual, cloneDeep} from 'lodash';

import ContactForm from './components/ContactForm';
import {ContactsStorage} from '../global/dataSources';
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
class EditContact extends Component {
  static propTypes = {
    resolves: PropTypes.shape({
      contact: PropTypes.object
    })
  }

  constructor (props) {
    super(props);
    this.canExit = false;
    this.state = {
      contact: cloneDeep(this.props.resolves.contact)
    }
  }

  uiCanExit = (trans) => {
    if (this.canExit || isEqual(this.state.contact, this.props.resolves.contact)) return true;

    let message = 'You have unsaved changes to this contact.';
    let question = 'Navigate away and lose changes?';
    return DialogService.confirm(message, question);
  }

  handleChangeContact = (contact) => {
    this.setState({ contact });
  }

  save = () => {
    // Save the contact, then go to the parent state (either 'contacts' or 'contacts.contact')
    const {stateService} = this.props.transition.router;
    ContactsStorage.save(this.state.contact)
      .then(() => this.canExit = true)
      .then(() => stateService.go('^', null, { reload: true }));
  }

  remove = () => {
    // Ask for confirmation, then delete the contact, then go to the grandparent state ('contacts')
    let {contact} = this.state;
    const {stateService} = this.props.transition.router;
    DialogService.confirm(`Delete contact: ${contact.name.first} ${contact.name.last}`)
      .then(() => ContactsStorage.remove(contact))
      .then(() => this.canExit = true)
      .then(() => stateService.go("^.^", null, { reload: true }));
  }

  render () {
    let {contact} = this.state;
    return (
      <div className="contact">
        <ContactForm contact={contact} onContactChange={this.handleChangeContact} />
        <hr />
        <div>
          <UISref to={'^'}><button className="btn btn-primary"><i className="fa fa-close" /><span>Cancel</span></button></UISref>
          <button className="btn btn-primary" onClick={this.save}><i className="fa fa-save" /><span>Save</span></button>
          <button className="btn btn-primary" onClick={this.remove}><i className="fa fa-close" /><span>Delete</span></button>
        </div>
      </div>
    );
  }
}

export default EditContact;