import React, { Component } from "react";

export default class WelcomeClass extends Component {
	render() {
		return (
			<div>
				<h1>
					Class {this.props.name} a.k.a {this.props.heroName}
				</h1>
				{this.props.children}
			</div>
		);
	}
}
