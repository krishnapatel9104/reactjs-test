import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userDetails: {},
};
export const userAllDetailsSlice = createSlice({
  name: "userAllDetails",
  initialState: initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    resetUserDetails: (state) => {
      state.userDetails = {};
    },
  },
});

export const { setUserDetails, resetUserDetails } = userAllDetailsSlice.actions;

export default userAllDetailsSlice.reducer;
