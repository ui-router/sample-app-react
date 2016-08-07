import React, {Component, PropTypes} from 'react';
import {get, set} from 'lodash';

const formInputs = [
  { label: 'First',   path: 'name.first' },
  { label: 'Last',   path: 'name.last' },
  { label: 'Company', path: 'company' },
  { label: 'Age',   path: 'age' },
  { label: 'Phone',   path: 'phone' },
  { label: 'Email',   path: 'email' },
  { label: 'Street',  path: 'address.street' },
  { label: 'City',   path: 'address.city' },
  { label: 'State',   path: 'address.state' },
  { label: 'Zip',   path: 'address.zip' },
  { label: 'Image',   path: 'picture' }
];

class ContactForm extends Component {
  static propTypes = {
    contact: PropTypes.object,
    onContactChange: PropTypes.func
  }
  handleChangeFor = (path) => {
    const {contact, onContactChange} = this.props;
    return event => {
      onContactChange(set({ ...contact }, path, event.target.value));
    }
  }
  render () {
    let {contact} = this.props;
    let inputs = formInputs.map(input =>
      <div key={input.path}>
        <label>{input.label}</label>
        <input type="text" value={get(contact, input.path)} onChange={this.handleChangeFor(input.path)}/>
      </div>
    );
    return (
      <div className="details">
        {inputs}
      </div>
    );
  }
}

export default ContactForm;