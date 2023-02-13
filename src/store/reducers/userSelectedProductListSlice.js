import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userSelectedProductLists: [],
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
      let alreadyExist = state.userSelectedProductLists.findIndex((product) => {
        return product.id === action.payload.id;
      });
      if (alreadyExist === -1) {
        return {
          ...state,
          userSelectedProductLists: state.userSelectedProductLists.concat(action.payload),
        };
      } else {
        let newArrayObj = [...state.userSelectedProductLists];
        newArrayObj[alreadyExist] = {
          ...newArrayObj[alreadyExist],
          quantity: newArrayObj[alreadyExist].quantity + 1,
        };
        return {
          ...state,
          userSelectedProductLists: newArrayObj,
        };
      }
    },
    updateUserSelectedProductList: (state, action) => {
      return {
        ...state,
        userSelectedProductLists: action.payload,
      };
    },
    resetUserSelectedProductList: (state) => {
      return {
        ...state,
        userSelectedProductLists: [],
      };
    },
  },
});

export const {
  setUserSelectedProductList,
  updateUserSelectedProductList,
  resetUserSelectedProductList,
} = userSelectedProductListSlice.actions;

export default userSelectedProductListSlice.reducer;
