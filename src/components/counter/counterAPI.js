import { createAsyncThunk } from "@reduxjs/toolkit";
function fetchCount(amount = 10) {
    return new Promise((resolve, rejejct) => {
        setTimeout(() => {
            resolve({ data: amount });
        }, 500);
    });
}

export const getAmount = createAsyncThunk(
    "counter/fetchCount",
    async (amount) => {
        const response = await fetchCount(amount);
        console.log("respo api : ", response);
        return response.data;
    }
);
