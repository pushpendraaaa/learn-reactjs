import React, { Component } from "react";

class User extends Component {
	render() {
		return (
			<div>
				<p>{this.props.render(false)}</p>
				{/* <p>{this.props.name()}</p> */}
				{/* <p>{this.props.name}</p> */}
			</div>
		);
	}
}

export default User;
