import { createSlice } from "@reduxjs/toolkit";
import { getAmount } from "./counterAPI";
const initialState = {
    value: 0,
    status: "idle",
};
export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        increase: (state, action) => {
            state.value = state.value + action.payload;
        },
        incrementIfOdd: (state, action) => {
            console.log("add if odd : ", state.value, action);
            if (state.value % 2 !== 0) {
                state.value = state.value + action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAmount.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAmount.fulfilled, (state, action) => {
                console.log("fullfilled : ", state.value, action);
                state.status = "idle";
                state.value = state.value + action.payload;
            });
    },
});

export const { increment, decrement, increase, incrementIfOdd } =
    counterSlice.actions;

export default counterSlice.reducer;
