import React, { useState } from "react";
import useDocumentTitle from "./38-useDocumentTitle";

function DocTitleTwo() {
	const [count, setCount] = useState(0);

	useDocumentTitle(count);

	// useEffect(() => {
	// 	document.title = `Count ${count}`;
	// }, [count]);

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count - {count}</button>
		</div>
	);
}

export default DocTitleTwo;
