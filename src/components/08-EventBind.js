import React, { Component } from "react";

class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello",
		};

		// Event Binding in constructor (official)
		// this.clickHandler = this.clickHandler.bind(this);
	}

	// clickHandler() {
	// 	this.setState({
	// 		message: "Goodbye",
	// 	});
	// 	console.log(this);
	// }

	clickHandler = () => {
		this.setState({
			message: "Goodbye",
		});
	};

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={this.clickHandler}>Click</button>
				{/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
				{/* <button onClick={() => this.clickHandler()}>Click</button> */}
			</div>
		);
	}
}

export default EventBind;
