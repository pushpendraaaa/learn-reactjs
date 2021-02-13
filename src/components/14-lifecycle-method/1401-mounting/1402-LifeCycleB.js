import React, { Component } from "react";

class LifeCycleB extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Pushpendra",
		};
		console.log("LifecycleB constructor.");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("LifecycleB getDerivedStateFromProps");
		return null;
	}

	componentDidMount() {
		console.log("LifecycleB componentDidMount");
		return null;
	}

	render() {
		console.log("LifecycleB Render");
		return <div>Lifecycle B</div>;
	}
}

export default LifeCycleB;
