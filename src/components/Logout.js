import React, { Component } from "react";
import firebase from "../initializers/firebase";
import AuthElements from './AuthElements';

class Logout extends Component {
  constructor(props) {
    super(props);

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

export default Logout;