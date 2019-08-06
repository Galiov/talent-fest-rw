import React, { Component } from "react";
import firebase from "../initializers/firebase";
import AuthElements from './AuthElements';
import styled from 'styled-components';

class Login extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.logOut = this.logOut.bind(this);

    this.state = {
      userLoggedIn: false,
      photoURL: "",
      name: ""
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          userLoggedIn: true,
          photoURL: user.providerData[0].photoURL,
          name: user.providerData[0].displayName
        })
      } else {
        this.setState({
          userLoggedIn: false,
          photoURL: "",
          name: ""
        });
      }
    });
  }

  login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/calendar.readonly");

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        let token = result.credential.accessToken;
      })
      .catch(err => {
        console.log(err);
      });
  }

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(console.log);
  }

  render() {
    return (
      <div>
        <AuthElements
          login={this.login}
          logOut={this.logOut}
          userLoggedIn={this.state.userLoggedIn}
          token={this.props.token}
          name={this.state.name}
          photoURL={this.state.photoURL}
        />
      </div>
      );
  }
}

export default Login;
