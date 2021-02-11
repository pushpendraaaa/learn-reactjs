import React, { Component } from "react";

export default class WelcomeClass extends Component {
	render() {
		const { name, heroName, children } = this.props;
		// const { state1, state2 } = this.state;
		return (
			<div>
				<h1>
					Class {name} a.k.a {heroName}
				</h1>
				{children}
			</div>
		);
		// return (
		// 	<div>
		// 		<h1>
		// 			Class {this.props.name} a.k.a {this.props.heroName}
		// 		</h1>
		// 		{this.props.children}
		// 	</div>
		// );
	}
}
