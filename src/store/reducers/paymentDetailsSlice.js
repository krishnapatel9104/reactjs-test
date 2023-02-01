import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    paymentDetails: {},
};
export const paymentDetailsSlice = createSlice({
    name: "paymentDetails",
    initialState: initialState,
    reducers: {
        setPaymentDetails: (state, action) => {
            state.paymentDetails = action.payload;
        },
    },
});

export const { setPaymentDetails } = paymentDetailsSlice.actions;

export default paymentDetailsSlice.reducer;
