import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../components/counter/counterSlice";
import userSlice from "../components/users/userSlice";
import userSelectedProductListSlice from "../components/redux/userSelectedProductListSlice";
import userAllDetailsSlice from "../components/redux/userDetailsSlice";
import paymentDetailsSlice from "../components/redux/paymentDetailsSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        counter: counterSlice,
        userSelectedProductLists: userSelectedProductListSlice,
        userAllDetails: userAllDetailsSlice,
        paymentDetails: paymentDetailsSlice,
    },
});
