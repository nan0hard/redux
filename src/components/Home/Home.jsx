import React from "react";
import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

const Home = () => {
	const { value } = useSelector((state) => state.arithmeticReducer);
	return (
		<>
			<h2>Home</h2>
			<h2>{`Value = ${value}`}</h2>
			<Contact />
		</>
	);
};

export default Home;
