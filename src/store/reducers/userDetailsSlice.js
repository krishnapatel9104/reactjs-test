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
    },
});

export const { setUserDetails } = userAllDetailsSlice.actions;

export default userAllDetailsSlice.reducer;
