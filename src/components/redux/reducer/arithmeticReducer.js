import { createReducer } from "@reduxjs/toolkit";

import { inc, dec, inc50, dec50 } from "../actions/constants";

const initialState = { value: 50 };

export const arithmeticReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(inc, (state) => {
			state.value += 1;
		})
		.addCase(inc50, (state, action) => {
			state.value += action.payload;
		})
		.addCase(dec, (state) => {
			state.value -= 1;
		})
		.addCase(dec50, (state, action) => {
			state.value -= action.payload;
		});
});

// export const arithmeticReducer = createReducer(initialState, {
// 	increment: (state) => {
// 		state.value += 1;
// 	},

// 	incrementByCertainValue: (state, action) => {
// 		state.value += action.payload;
// 	},

// 	decrement: (state) => {
// 		state.value -= 1;
// 	},

// 	decrementByCertainValue: (state, action) => {
// 		state.value -= action.payload;
// 	},
// });
