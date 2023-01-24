import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetail: {
        email: "",
        password: "",
    },
    isAuthentication: false,
};
export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetail = action.payload;
            state.isAuthentication = true;
        },
    },
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;
