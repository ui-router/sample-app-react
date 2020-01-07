import React from 'react';
import PropTypes from 'prop-types';
import { get, set } from 'lodash';

const formInputs = [
  { label: 'First', path: 'name.first' },
  { label: 'Last', path: 'name.last' },
  { label: 'Company', path: 'company' },
  { label: 'Age', path: 'age' },
  { label: 'Phone', path: 'phone' },
  { label: 'Email', path: 'email' },
  { label: 'Street', path: 'address.street' },
  { label: 'City', path: 'address.city' },
  { label: 'State', path: 'address.state' },
  { label: 'Zip', path: 'address.zip' },
  { label: 'Image', path: 'picture' }
];

function ContactForm(props) {
  const handleChangeFor = (path) => {
    const { contact, onContactChange } = props;
    return event => {
      onContactChange(set({ ...contact }, path, event.target.value));
    }
  };

  let { contact } = props;
  let inputs = formInputs.map(input =>
      <div key={input.path}>
        <label>{input.label}</label>
        <input type="text" value={get(contact, input.path)} onChange={handleChangeFor(input.path)}/>
      </div>
  );

  return (
      <div className="details">
        {inputs}
      </div>
  );
}

ContactForm.propTypes = {
  contact: PropTypes.object,
  onContactChange: PropTypes.func
}

export default ContactForm;
