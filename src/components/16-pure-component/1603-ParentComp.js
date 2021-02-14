import React, { Component, PureComponent } from "react";
import PureComp from "./1601-PureComp";
import RegComp from "./1602-RegComp";

class ParentComp extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			name: "Pushpendra",
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: "Jhanvi",
			});
		}, 2000);
	}

	render() {
		console.log("************ Parent Comp Render *************");
		return (
			<div>
				<h1>Parent Component</h1>
				<PureComp name={this.state.name} />
				<RegComp name={this.state.name} />
			</div>
		);
	}
}

export default ParentComp;
