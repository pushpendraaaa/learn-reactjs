import React from "react";

function Person(props) {
	const { person } = props;

	// const persons = [
	// 	{
	// 		id: 1,
	// 		name: "Bruce",
	// 		age: 25,
	// 		skill: "React",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Clark",
	// 		age: 30,
	// 		skill: "Angular",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Diana",
	// 		age: 20,
	// 		skill: "Vue",
	// 	},
	// ];

	// const personList = persons.map((person) => (
	// 	<h1>
	// 		I am {person.name}. I am {person.age} years old. I konw {person.skill}{" "}
	// 	</h1>
	// ));

	return (
		<div>
			<h1>
				I am {person.name}. I am {person.age} years old. I konw {person.skill}{" "}
			</h1>
			{/* {personList} */}
		</div>
	);
}

export default Person;
