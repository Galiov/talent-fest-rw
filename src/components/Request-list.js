import React, { Component } from "react";
import Request from "./Request";
import { ListGroup, ListGroupItem } from 'reactstrap';
import "./components-styles/Request-list.css";

class RequestList extends Component {
 render() {
   return (
       <div className="list-down">
         <ListGroup>
           <ListGroupItem active tag="a" href="#" action>Request</ListGroupItem>
           <ListGroupItem tag="a" href="#" action>Request 1</ListGroupItem>
           <ListGroupItem tag="a" href="#" action>Request 2</ListGroupItem>
           <ListGroupItem tag="a" href="#" action>Request 3</ListGroupItem>
           <ListGroupItem tag="a" href="#" action>Request 4</ListGroupItem>
           <ListGroupItem disabled tag="a" href="#" action>Request 5</ListGroupItem>
         </ListGroup>
       </div>
   );
 }
}
export default RequestList;
