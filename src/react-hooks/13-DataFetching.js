import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
	// const [posts, setPosts] = useState([]);
	const [post, setPost] = useState({});
	const [id, setId] = useState(1);
	const [idDromButtonClick, setIdDromButtonClick] = useState(1);

	useEffect(() => {
		// Fetching Posts and Posts by - ID
		axios
			// .get("https://jsonplaceholder.typicode.com/posts")
			// .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.get(`https://jsonplaceholder.typicode.com/posts/${idDromButtonClick}`)
			.then((res) => {
				console.log(res);
				setPost(res.data);
			})
			.catch((error) => console.log(error));
	}, [idDromButtonClick]);

	const handleClick = () => {
		setIdDromButtonClick(id);
	};

	return (
		<div>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>
				Fetch Post
			</button>
			<div>{post.title}</div>
			{/* <ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</div>
	);
}

export default DataFetching;
