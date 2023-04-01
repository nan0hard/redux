import React from "react";
import { useSelector } from "react-redux";

import About from "../About/About";

const Contact = () => {
	const { value } = useSelector((state) => state.arithmeticReducer);
	return (
		<>
			<h3>Contact</h3>
			<h2>{`Value = ${value}`}</h2>

			<About />
		</>
	);
};

export default Contact;
