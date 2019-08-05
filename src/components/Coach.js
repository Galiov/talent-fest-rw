import React, { Component } from "react";
import Navbar from "./Navbar";
import RequestList from "./Request-list";
import Details from "./Details";

class Coach extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <RequestList />
        <Details />
      </div>
    );
  }
}

export default Coach;
