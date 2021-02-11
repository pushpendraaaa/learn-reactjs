import React from "react";

const GreetFunctional = (props) => {
	// const GreetFunctional = ({name, heroName, children}) => {
	const { name, heroName, children } = props;
	// console.log(props);
	// props.name = "Pushpendra"; // Don't do this bcz props are immutable

	return (
		<div>
			<h1>
				Hello {name} a.k.a {heroName}
			</h1>
			{children}
		</div>
	);

	// return (
	// 	<div>
	// 		<h1>
	// 			Hello {props.name} a.k.a {props.heroName}
	// 		</h1>
	// 		{props.children}
	// 	</div>
	// );
};

// const Greet = () => {
// 	return (
// 		<div>
// 			<h1>Hello Pushpendra</h1>
// 		</div>
// 	);
// };

// function Greet() {
// 	return (
// 		<div>
// 			<h1>Hello Pushpendra</h1>
// 		</div>
// 	);
// }

export default GreetFunctional;
