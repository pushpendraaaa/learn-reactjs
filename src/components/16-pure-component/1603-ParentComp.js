import React, { Component } from "react";
import MemoComp from "../17-memo/1701-MemoComp";
// import PureComp from "./1601-PureComp";
// import RegComp from "./1602-RegComp";

class ParentComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Pushpendra",
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: "Pushpendra",
			});
		}, 2000);
	}

	render() {
		console.log("************ Parent Comp Render *************");
		return (
			<div>
				<h1>Parent Component</h1>
				{/* <PureComp name={this.state.name} /> */}
				{/* <RegComp name={this.state.name} /> */}
				<MemoComp name={this.state.name} />
			</div>
		);
	}
}

export default ParentComp;
