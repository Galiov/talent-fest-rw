import React from 'react';
import "./components-styles/AuthElements.css";

const AuthElements = (props) => {
	  const logInButton = () => {
    if (props.userLoggedIn)
      return (
   <div className = "user">
        <img width="35" height="35" src={props.photoURL} alt="avatar" />
        <p>{props.name}</p>
        <button className="button" onClick={props.logOut}>Sign Out</button>
   </div>  
      );
    }

    return (
      <div >
        {logInButton()}
      </div>);

  }


  export default AuthElements;

