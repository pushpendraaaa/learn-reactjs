import React from "react";
import Person from "./02-Person";

function NameList() {
	// const names = ["Bruce", "Clark", "Diana"];

	const persons = [
		{
			id: 1,
			name: "Bruce",
			age: 25,
			skill: "React",
		},
		{
			id: 2,
			name: "Clark",
			age: 30,
			skill: "Angular",
		},
		{
			id: 3,
			name: "Diana",
			age: 20,
			skill: "Vue",
		},
	];

	// const nameList = names.map((name) => <h1>{name}</h1>);
	// const nameList = names.map((name, index) => (
	// 	<h1 key={index}>
	// 		{index} {name}
	// 	</h1>
	// ));

	const personList = persons.map((person) => (
		<Person key={person.id} person={person} />
	));

	return (
		<div>
			{personList}
			{/* {nameList} */}
			{/* {names.map((name) => (
				<h1>{name}</h1>
			))} */}

			{/* <h1>{names[0]}</h1>
			<h1>{names[1]}</h1>
			<h1>{names[2]}</h1> */}
		</div>
	);
}

export default NameList;
