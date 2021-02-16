import React, { Component } from "react";
import ComponentF from "./2303-ComponentF";
import UserContext from "./2304-UserContext";

class ComponentE extends Component {
	static contextType = UserContext;

	render() {
		return (
			<div>
				Component E Context {this.context}
				<ComponentF />
			</div>
		);
	}
}

// Component.contextType = UserContext;

export default ComponentE;
