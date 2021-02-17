import React, { useCallback, useState } from "react";
import Count from "./30-Count";
import Button from "./29-Button";
import Title from "./31-Title";

function ParentComponent() {
	const [age, setAge] = useState(25);
	const [salary, setSalary] = useState(50000);

	const incrementAge = useCallback(() => {
		setAge(age + 1);
	}, [age]);

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000);
	}, [salary]);

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salery</Button>
		</div>
	);
}

export default ParentComponent;
