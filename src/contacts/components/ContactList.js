import React, {Component, PropTypes} from 'react';
import {UISref, UISrefActive} from '@uirouter/react';
/**
 * This component renders a list of contacts.
 *
 * At the top is a "new contact" button.
 * Each list item is a clickable link to the `contacts.contact` details substate
 */
class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
  }
  constructor (props) {
    super(props);
  }
  render () {
    // This link is a relative ui-sref to the contacts.new state.
    let newContact = (
      <UISref to={'.new'}>
        <a><button className="btn btn-primary"><i className="fa fa-pencil"></i><span>New Contact</span></button></a>
      </UISref>
    );
    // When the current state matches the ui-sref's state (and its parameters)
    // UISrefActive applies the 'selected' class to the li element
    let contacts = this.props.contacts.map((contact, index) =>
      <UISrefActive key={index} class="selected">
        <li><UISref to={'.contact'} params={{contactId:contact._id}}><a href="asd">{contact.name.first + ' ' + contact.name.last}</a></UISref></li>
      </UISrefActive>
    );
    return (
      <div className={this.props.className}>
        <ul className="selectlist list-unstyled flex nogrow">
          <li>{newContact}</li>
          <li>&nbsp;</li>
          {contacts}
        </ul>
      </div>
    );
  }
}

export default ContactList;