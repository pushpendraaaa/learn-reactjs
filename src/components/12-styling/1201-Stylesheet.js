import React from "react";
import "./1302-myStyle.css";

function Stylesheet(props) {
	const primary = props.primary ? "primary" : "";
	return (
		<div>
			{" "}
			<h1 className={`${primary} font-xl`}>StyleSheet</h1>{" "}
		</div>
	);
}

export default Stylesheet;
