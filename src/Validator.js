import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordInput: '',
      passwordsMatch: false
    }

    this.handlePasswordInput = this.handlePasswordInput.bind(this)
    this.handlePasswordMatch = this.handlePasswordMatch.bind(this)
  }

  handlePasswordInput(passwordInput) {
    this.setState({
      passwordInput: passwordInput
    })
    console.log(passwordInput)
  }

  handlePasswordMatch(passwordInput) {
    this.setState({
      passwordInput: passwordInput
    })
  }

  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Validator;
