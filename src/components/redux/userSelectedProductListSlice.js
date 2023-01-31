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
            console.log("acgtion called : ", action.payload);
            let alreadyExist = state.userSelectedProductLists.findIndex(
                (product) => {
                    return product.id === action.payload.id;
                }
            );
            console.log("find index : ", alreadyExist);
            if (alreadyExist === -1) {
                console.log("now add obj new one ");
                return {
                    ...state,
                    userSelectedProductLists:
                        state.userSelectedProductLists.concat(action.payload),
                };
            }
        },
        updateUserSelectedProductList: (state, action) => {
            return {
                ...state,
                userSelectedProductLists: action.payload,
            };
        },
    },
});

export const { setUserSelectedProductList, updateUserSelectedProductList } =
    userSelectedProductListSlice.actions;

export default userSelectedProductListSlice.reducer;
