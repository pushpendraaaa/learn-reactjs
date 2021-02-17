import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
	loading: true,
	error: "",
	post: {},
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				loading: false,
				post: action.payload,
				error: "",
			};
		case "FETCH_ERROR":
			return {
				loading: false,
				post: {},
				error: "Somethinng went wrong!",
			};
		default:
			return state;
	}
};

function DataFetchingTwo() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		// effect;
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/1`)
			.then((res) => {
				// console.log(res);
				dispatch({ type: "FETCH_SUCCESS", payload: res.data });
			})
			.catch((error) => {
				// console.log(error);
				dispatch({ type: "FETCH_ERROR" });
			});
		// return () => {
		// 	cleanup;
		// };
	}, []);

	return (
		<div>
			{state.loading ? "Loading..." : state.post.title}
			{state.error ? state.error : null}
		</div>
	);
}

export default DataFetchingTwo;
