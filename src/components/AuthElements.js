import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

.avatar{
  display: flex;
  flex-direction: row;
}


`

const AuthElements = (props) => {
	  const logInButton = () => {
    if (props.userLoggedIn)
      return (
  <Styles>
   <div className = "avatar">
        <p>{props.name}</p>,
        <img width="32" src={props.photoURL} alt="avatar" />,
        <button className="button" onClick={props.logOut}>Sign Out</button>
   </div> 
   </Styles>   
      );
  
    return (
      <button className="inicio" onClick={props.login}>Iiniciar sesión con Google</button>
      );
    }

    return (
      <div>
        {logInButton()}
      </div>);

  }


  export default AuthElements;

