import React, { useState } from "react";

function HookCounterTwo() {
	const [name, setName] = useState({ firstName: "", lastName: "" });

	return (
		<div>
			<form>
				<input
					type="text"
					value={name.firstName}
					onChange={(e) => setName({ ...name, firstName: e.target.value })}
				/>
				<input
					type="text"
					name={name.lastName}
					onChange={(e) => setName({ ...name, lastName: e.target.value })}
				/>
				<h2>Your first name is - {name.firstName}</h2>
				<h2>Your last name is - {name.lastName}</h2>
				<h3>{JSON.stringify(name)}</h3>
			</form>
		</div>
	);
}

export default HookCounterTwo;
