import React, { Component } from "react";
import Navbar from "./Navbar";
import RequestList from "./Request-list";
import HrForm from "./HR-form";

class HR extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="big-container">
					<RequestList />
					<div className="container">
						<HrForm />
					</div>
				</div>
       </div>
		);
	}
}

export default HR;
