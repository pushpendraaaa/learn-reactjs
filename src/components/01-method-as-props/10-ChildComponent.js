import React from "react";

function ChildComponent(props) {
	const { greetHandler } = props;
	return (
		<div>
			<button onClick={() => greetHandler("Child")}>Greet Parent</button>
		</div>
	);
}

export default ChildComponent;
