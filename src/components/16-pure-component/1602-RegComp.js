import React, { Component } from "react";

class RegComp extends Component {
	render() {
		console.log("Reg Comp Render");
		return (
			<div>
				<h3> Regular Component</h3>
				<p>{this.props.name}</p>
			</div>
		);
	}
}

export default RegComp;
