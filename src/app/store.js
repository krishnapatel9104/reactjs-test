import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../components/counter/counterSlice";
import userSlice from "../components/users/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        counter: counterSlice,
    },
});
