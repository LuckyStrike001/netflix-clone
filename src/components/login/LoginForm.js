import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="form-container">
          <form>
            <h1>Sign In</h1>
            <div className="input-container">
              <input type="email" required />
              <label>Email or Phone Number</label>
            </div>
            <div className="input-container">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="input-container">
              <a type="submit">Sign In</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
