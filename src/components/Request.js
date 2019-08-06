import React from "react";

const Request = props => {
  const showInfo = () => {
      return (
      <div>
        <p>{props.userName} ({props.rol}) pide tal certificación {props.version} llevada a cabo en {props.place} la fecha del {props.date}.</p>
        <p>Mentor: {props.mentor}.</p>
        <p>Comentarios: {props.coments}</p>
      </div>
    );
  }

  return( 
    <div>
    {showInfo()}
    </div>
    );
}

export default Request;
