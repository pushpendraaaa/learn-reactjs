import React from "react";

// Inline Styling
const heading = {
	fontSize: "72px",
	color: "blue",
};

function Inline() {
	return (
		<div style={heading}>
			<h1 className="error">Error</h1>
			<h1>Inline</h1>
		</div>
	);
}

export default Inline;
