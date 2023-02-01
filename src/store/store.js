import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
// import { userSelectedProductListSlice } from "./reducers/userSelectedProductListSlice";
// import { userAllDetailsSlice } from "./reducers/userDetailsSlice";
// import { paymentDetailsSlice } from "./reducers/paymentDetailsSlice";
export const store = configureStore({
    reducer: {
        rootReducer,
    },
    // reducer: {
    //     userSelectedProductLists: userSelectedProductListSlice,
    //     userDetails: userAllDetailsSlice,
    //     paymentDetails: paymentDetailsSlice,
    // },
});
