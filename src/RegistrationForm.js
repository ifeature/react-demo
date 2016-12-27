import React, { Component } from 'react';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };

    this.handleSubmit = ::this.handleSubmit;
    this.handleChange = ::this.handleChange;
  }
  static checkValidity(field) {
    const isValid = field.checkValidity();
    console.log(field.validity, isValid);

    if (!isValid) {
      field.classList.add('invalid');
      if (field.validity.typeMismatch) {
        field.setCustomValidity('Enter email in the correct format!');
      }
    } else {
      field.setCustomValidity("");
      field.classList.remove('invalid');
    }

    return isValid;
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('submit: ', this.state.email);
  }
  handleChange(event) {
    const field = event.target;

    this.setState({
      email: field.value
    });

    //RegistrationForm.checkValidity(field);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="input-field" type="email" value={this.state.email} onChange={this.handleChange} ref="email" />
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;