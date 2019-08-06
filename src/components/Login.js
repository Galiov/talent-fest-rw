import React, { Component } from "react";
import firebase from "../initializers/firebase";
import "./components-styles/Login.css";
import logo from "../assets/ruleswareblack.png";

class Login extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/calendar.readonly");

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
      });
  }

  render() {
    return (
      <div className="Login-display">
        <div className="Login">
          <img className="Logo" src={logo} alt="logo" />
          <button className="button" onClick={this.login}>
            Inciar sesión con Google
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
