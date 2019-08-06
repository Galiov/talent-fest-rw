import React, { Component } from "react";
import Navbar from "./Navbar";
import RequestList from "./Request-list";
import Details from "./Details";
import firebase from "firebase";
class TechLead extends Component {
	bajarData = () => {
		const db = firebase.firestore();
		db.collection("peticiones")
			.get()
			.then(querySnapshot => {
				let reqArray = [];
				querySnapshot.forEach(doc => {
					reqArray.push(doc.data().data);
					console.log(doc.id, " => ", doc.data());
					console.log(reqArray);
				});
			});
	};
	render() {
		return (
			<div>
				<Navbar />
				<div className="big-container">
					<RequestList />
					<div className="container">
						<Details />
						<div className="buttons">
						<button onClick={this.bajarData}>Decline</button>
						<button onClick={this.bajarData}>Validate</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default TechLead;
