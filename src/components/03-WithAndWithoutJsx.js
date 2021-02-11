import React from "react";

const WithAndWithoutJsx = () => {
	// 1. With JSX
	// render() {
	// 	return (
	// 		<div>
	// 			<h1>Hell World!</h1>
	// 		</div>
	// 	);
	// }
	// 2. Without JSX
	// return React.createElement("div", null, "Hello Pushpendra");
	// return React.createElement("div", null, "h1", "Hello Pushpendra");
	// return React.createElement(
	// 	"div",
	// 	null,
	// 	React.createElement("h1", null, "Hello Pushpendra")
	// );
	return React.createElement(
		"div",
		{ id: "hello", className: "dummyClass" }, // additional property
		React.createElement("h1", null, "Hello Pushpendra")
	);
};

export default WithAndWithoutJsx;

// JSX Diffrence
// class => className
// for => htmlFor
// camelCase property naming convention
// onclick => onClick
// tabindex => tabIndex

// https://github.com/facebook/react/issues/
