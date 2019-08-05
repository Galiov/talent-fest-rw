import React, { Component } from "react";
import Navbar from "./Navbar";
import EmployeeForm from "./Employee-form";

class Employee extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <EmployeeForm />
        <p>This is the Employee view</p>
      </div>
    );
  }
}

export default Employee;
