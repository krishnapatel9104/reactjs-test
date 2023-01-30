import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userSelectedProductLists: [
        // {
        //     imageSource: "",
        //     productName: "",
        //     productPrice: 0,
        //     isLike: false,
        //     isNewArrival: false,
        //     filter: "",
        //     brand: "",
        //     category: "",
        //     size: "",
        //     productDesc: [],
        //     reviewRate: 0,
        //     imageDifferentAngle: [],
        // },
    ],
    otherDetails: {
        Shipping: 64,
        vatAndTax: 64,
    },
};
export const userSelectedProductListSlice = createSlice({
    name: "userSelectedProductList",
    initialState: initialState,
    reducers: {
        setUserSelectedProductList: (state, action) => {
            return {
                ...state,
                userSelectedProductLists: state.userSelectedProductLists.concat(
                    action.payload
                ),
            };
        },
    },
});

export const { setUserSelectedProductList } =
    userSelectedProductListSlice.actions;

export default userSelectedProductListSlice.reducer;
