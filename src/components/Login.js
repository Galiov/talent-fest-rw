import React, { Component } from "react";
import firebase from "../initializers/firebase";
import styled from 'styled-components';

const Styles = styled.div`

.avatar{
  display: flex;
  flex-direction: row;

}

`

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

  logInButton() {
    if (this.state.userLoggedIn)
      return [
   <Styles>
   <div className = "avatar">
        <p>{this.state.name}</p>,
        <img width="32" src={this.state.photoURL} alt="avatar" />,
        <button className="button" onClick={this.logOut}>Sign Out</button>
   </div>
   </Styles>     
      ];

    return <button onClick={this.login}>Iiniciar sesión con Google</button>;
   
  }

  render() {
    return <div>{this.logInButton()}</div>;

  }
}

export default Login;

{
  /*export default withStyles({
  container:{
    display: 'flex',
    flexDirection: ''
  }
}) (Login);*/
}
