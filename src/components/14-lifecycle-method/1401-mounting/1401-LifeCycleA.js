import React, { Component } from "react";
import LifeCycleB from "./1402-LifeCycleB";

class LifeCycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Pushpendra",
		};
		console.log("LifecycleA constructor.");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("LifecycleA getDerivedStateFromProps");
		return null;
	}

	componentDidMount() {
		console.log("LifecycleA componentDidMount");
		return null;
	}

	render() {
		console.log("LifecycleA Render");
		return (
			<div>
				<div>Lifecycle A</div>
				<LifeCycleB />
			</div>
		);
	}
}

export default LifeCycleA;
