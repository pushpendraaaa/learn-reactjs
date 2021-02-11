import React, { Component } from "react";

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	incrementCount() {
		// this.state.count = this.state.count + 1; // Never Modify the state directely
		// this.setState(
		// 	{
		// 		count: this.state.count + 1,
		// 	},
		// 	() => {
		// 		console.log("Callback Value = ", this.state.count); // Callback Function, Callback log statement
		// 	}
		// );

		this.setState(
			(prevState, props) => ({
				count: prevState.count + 1,
				// count: prevState.count + props.addValue,
			})
			// () => {
			// 	console.log("Callback Value = ", this.state.count); // Callback Function, Callback log statement
			// }
		);
		console.log(this.state.count); // Synchrounus Callback log statement
	}

	incrementFive() {
		this.incrementCount();
		this.incrementCount();
		this.incrementCount();
		this.incrementCount();
		this.incrementCount();
	}

	render() {
		return (
			<div>
				<h1>Count - {this.state.count}</h1>
				{/* <button onClick={() => this.incrementCount()}>Increment</button> */}
				<button onClick={() => this.incrementFive()}>Increment-5</button>
			</div>
		);
	}
}

export default Counter;
