import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordInput: '',
      confirmPasswordInput: '',
      passwordsMatch: false
    }
  }

  handlePassword(e) {
    this.setState({
      passwordInput: e.target.value
    })
  }

  handleConfirmPassword(e) {
    this.setState({
      confirmPasswordInput: e.target.value
    })
  }

  handlePasswordInputChange(e) {
      if (this.state.passwordInput === this.state.confirmPasswordInput) {
        this.setState({
          passwordsMatch: true
        })
      } else {
        this.setState({
          passwordsMatch: false
        })
      }
  }



  render() {
    var passwordsMatch = this.state.passwordsMatch ? "Passwords Match!" : "Passwords do not match"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" onChange={(e) => this.handlePassword(e)}/>
        <input type="password" placeholder="confirm password" onChange={(e) => this.handleConfirmPassword(e)}/>
        <input type="submit" value="Submit"  onClick={(e) => this.handlePasswordInputChange(e)} />
        {passwordsMatch}
      </div>
    );
  }
}

export default Validator;
