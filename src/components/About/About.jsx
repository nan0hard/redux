import React from "react";
import { useDispatch, useSelector } from "react-redux";

const About = () => {
	const dispatch = useDispatch();
	const { value } = useSelector((state) => state.arithmeticReducer);

	const increment = () => {
		dispatch({
			type: "increment",
		});
	};
	const incrementByCertainValue = () => {
		dispatch({
			type: "incrementByCertainValue",
			payload: 50,
		});
	};
	const decrement = () => {
		dispatch({
			type: "decrement",
		});
	};

	const decrementByCertainValue = () => {
		dispatch({
			type: "decrementByCertainValue",
			payload: 50,
		});
	};

	return (
		<>
			<h4>About</h4>
			<h2>{`Value = ${value}`}</h2>
			<hr />
			<button onClick={increment}>Increment</button>
			<button onClick={incrementByCertainValue}>Increment By 50</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={decrementByCertainValue}>Increment By 50</button>
		</>
	);
};

export default About;
