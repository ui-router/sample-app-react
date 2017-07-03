import React, {Component, PropTypes} from 'react';
import {UIView} from '@uirouter/react';

import ContactList from './components/ContactList';
/**
 * This component renders the contacts page.
 *
 * On the left is the list of contacts.
 * On the right is the ui-view viewport where contact details appear.
 */
class Contacts extends Component {
  static propTypes = {
    resolves: PropTypes.shape({
      contacts: PropTypes.arrayOf(PropTypes.object)
    })
  }

  constructor (props) {
    super(props);
  }
  
  render () {
    let {contacts} = this.props.resolves;
    return (
      <div className="my-contacts flex-h">
        <ContactList contacts={contacts} className="flex nogrow" />
        <UIView><h4 style={{margin: '1em 2em'}}>Select a contact</h4></UIView>
      </div>
    );
  }
}

export default Contacts;