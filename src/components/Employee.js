import React, { Component } from "react";
import Navbar from "./Navbar";
import EmployeeForm from "./Employee-form";
import "./components-styles/Employee.css";

class Employee extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <div className="big-container">
        <div className="img-div"></div>
        <div className="container">
          <p>
            Verify the location and date of your certification{" "}
            <span>
              <a href="https://wsr.pearsonvue.com/testtaker/signin/SignInPage/PEGASYSTEMS?locale=en_US">
                here
              </a>
            </span> and complete the next form.
          </p>
          <EmployeeForm />
        </div>
      </div>
      </div>
    );
  }
}

export default Employee;
