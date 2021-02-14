import React from "react";

function MemoComp(props) {
	console.log("Rendering Memo Comp");
	return (
		<div>
			<p>{props.name}</p>
		</div>
	);
}

export default React.memo(MemoComp); // version 16.6
