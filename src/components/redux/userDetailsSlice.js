import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userDetail: {},
};
export const userAllDetailsSlice = createSlice({
    name: "userAllDetails",
    initialState: initialState,
    reducers: {
        setUserDetails: (state, action) => {
            console.log("reducers : ", action.payload);
            state.userDetails.contactInformation =
                action.payload.contactInformation;
            state.userDetails.deliveryInformation =
                action.payload.deliveryInformation;
        },
    },
});

export const { setUserDetails } = userAllDetailsSlice.actions;

export default userAllDetailsSlice.reducer;
