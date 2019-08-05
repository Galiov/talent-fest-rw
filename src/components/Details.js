import React, { Component } from "react";
import Confirm from "./Confirm";
import Rejection from "./Rejection";

class Details extends Component {
  render() {
    return (
      <div>
        <Confirm />
        <Rejection />
      </div>
    );
  }
}

export default Details;
