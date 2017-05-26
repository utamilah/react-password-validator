import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      emailValid: '',
      passwordInput: '',
      confirmPasswordInput: '',
      passwordsMatch: false
    }
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
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

      if(this.state.email.includes('@') === true ) {
        this.setState({
          emailValid: true
        })
      } else {
        this.setState({
          emailValid: false
        })
      }
  }



  render() {
    var passwordsMatch = this.state.passwordsMatch ? "Passwords Match!" : "Passwords do not match"
    var emailValid = this.state.email.includes('@') ? "Email is valid!" : "Email is invalid"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" onChange={(e) => this.handleEmail(e)}/>
        <input type="password" placeholder="password" onChange={(e) => this.handlePassword(e)}/>
        <input type="password" placeholder="confirm password" onChange={(e) => this.handleConfirmPassword(e)}/>
        <input type="submit" value="Submit"  onClick={(e) => this.handlePasswordInputChange(e)} />
        <p>{passwordsMatch}</p>
        <p>{emailValid}</p>
      </div>
    );
  }
}

export default Validator;
