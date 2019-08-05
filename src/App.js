import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Employee from "./components/Employee";
import Coach from "./components/Coach";
import TechLead from "./components/TechLead";
import HR from "./components/HR";
import NoMatch from "./components/NoMatch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/employee" component={Employee} />
          <Route exact path="/coach" component={Coach} />
          <Route exact path="/tl" component={TechLead} />
          <Route exact path="/hr" component={HR} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
