import React from 'react';
import {Link} from 'react-router-dom';
import "./components-styles/AuthElements.css";

const AuthElements = (props) => {
	  const logInButton = () => {
    if (props.userLoggedIn)
      return (
   <div className = "user">
        <p>{props.name}</p>
        <img className="avatar" src={props.photoURL} alt="avatar" />
        <button className="log-out-btn" onClick={props.logOut}><Link to="/"/>Sign Out</button>
   </div>  
      );
    }

    return (
      <div >
        {logInButton()}
      </div>);

  }


  export default AuthElements;

