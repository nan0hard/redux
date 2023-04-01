import { configureStore } from "@reduxjs/toolkit";
import { arithmeticReducer } from "./components/redux/reducer/arithmeticReducer";

const initialState = {};

const store = configureStore({
	reducer: {
		arithmeticReducer: arithmeticReducer,
	},
});

export default store;
