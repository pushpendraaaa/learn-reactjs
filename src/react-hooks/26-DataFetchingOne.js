import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetchingOne() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [post, setPost] = useState({});

	useEffect(() => {
		// effect;
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/1`)
			.then((res) => {
				console.log(res);
				setLoading(false);
				setPost(res.data);
				setError("");
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				setPost({});
				setError("Something went wrong!");
			});
		// return () => {
		// 	cleanup;
		// };
	}, []);

	return (
		<div>
			{loading ? "Loading..." : post.title}
			{error ? error : null}
		</div>
	);
}

export default DataFetchingOne;
