import React, { Component } from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}

	render() {
		// 1. If/else condition
		// if (this.state.isLoggedIn) {
		// 	return <div>Welcome Pushpendra</div>;
		// } else {
		// 	return <div>Welcome Guest</div>;
		// }
		//
		// Element Variable
		// let message;
		// if (this.state.isLoggedIn) {
		// 	message = <div>Welcome Pushpendra</div>;
		// } else {
		// 	message = <div>Welcome Guest</div>;
		// }
		// return <div>{message}</div>;
		//
		// Conditional Operator
		// return this.state.isLoggedIn ? (
		// 	<div>Welcome Pushpendra</div>
		// ) : (
		// 	<div>Welcome Guest</div>
		// );
		//
		// Short Circuit Operator
		return this.state.isLoggedIn && <div>Welcome Pushpendra</div>;
		//
		// return (
		// 	<div>
		// 		<div>Welcome Pushpendra</div>
		// 		<div>Welcome Guest</div>
		// 	</div>
		// );
	}
}

export default UserGreeting;
