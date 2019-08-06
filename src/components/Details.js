import React, { Component } from "react";
import Confirm from "./Confirm";
import Rejection from "./Rejection";

class Details extends Component {
  render() {
    return (
      <div>
      	<p>Anel (coachee) pide Certificaión en Pega versión 2, llevada a cabo en ITESO la fecha del 20 de Noviembre de 2019.</p>
              <p>Mentor: Hector Ramos.</p>
              <p>Comentarios: Ninguno</p>
        <Confirm />
        <Rejection />
      </div>
    );
  }
}

export default Details;
