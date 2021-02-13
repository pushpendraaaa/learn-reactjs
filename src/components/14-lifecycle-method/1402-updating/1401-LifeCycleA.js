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
		console.log("LifecycleA componentDiMount");
	}

	shouldComponentUpdate() {
		console.log("LifecycleA shouldComponentUpdate");
		return true;
	}

	getSnapshotBeforeUpdate() {
		console.log("LifecycleA getSnapshotBeforeUpdate");
		return null;
	}

	componentDidUpdate() {
		console.log("LifecycleA componentDiUpdate");
	}

	changeState = () => {
		this.setState({ name: "Code Evolution" });
	};

	render() {
		console.log("LifecycleA Render");
		return (
			<div>
				<div>Lifecycle A</div>
				<button onClick={this.changeState}>Change State</button>
				<LifeCycleB />
			</div>
		);
	}
}

export default LifeCycleA;
