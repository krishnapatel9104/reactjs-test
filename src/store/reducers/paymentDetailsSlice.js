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
    resetPaymentDetails: (state) => {
      state.paymentDetails = {};
    },
  },
});

export const { setPaymentDetails, resetPaymentDetails } = paymentDetailsSlice.actions;

export default paymentDetailsSlice.reducer;
