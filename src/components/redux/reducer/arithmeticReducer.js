import { createReducer } from "@reduxjs/toolkit";

const initialState = { value: 50 };

// export const arithmeticReducer = createReducer(initalState, (builder) => {
// 	builder
// 		.addCase(increment, (state) => {
// 			state.value += 1;
// 		})
// 		.addCase(incrementByCertainValue, (state, action) => {
// 			state.value = action.payload;
// 		})
// 		.addCase(decrement, (state) => {
// 			state.value -= 1;
// 		});
// });

export const arithmeticReducer = createReducer(initialState, {
	increment: (state) => {
		state.value += 1;
	},

	incrementByCertainValue: (state, action) => {
		state.value += action.payload;
	},

	decrement: (state) => {
		state.value -= 1;
	},

	decrementByCertainValue: (state, action) => {
		state.value -= action.payload;
	},
});
