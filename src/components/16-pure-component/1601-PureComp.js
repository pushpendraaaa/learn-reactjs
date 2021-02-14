import React, { PureComponent } from "react";

class PureComp extends PureComponent {
	render() {
		console.log("Pure Comp Render");
		return (
			<div>
				<h3>Pure Component</h3>
				<p>{this.props.name}</p>
			</div>
		);
	}
}

export default PureComp;
