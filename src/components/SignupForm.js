import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignupForm extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      usernameInputValue: '',
      passwordInputValue: '',
    };
  }

  handleInputChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Signup</h1>
        <label htmlFor="usernameInputValue">
          Username:
          <input
            type="text"
            placeholder="username"
            id="usernameInputValue"
            name="usernameInputValue"
            value={this.state.usernameInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor="passwordInputValue">
          Password:
          <input
            type="text"
            placeholder="password"
            id="passwordInputValue"
            name="passwordInputValue"
            value={this.state.passwordInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        {/* Need a button to acheive submit functionality, but don't use the button */}
        <button type="submit" style={{ display: 'none' }} />
      </form>
    );
  }
}

export default SignupForm;