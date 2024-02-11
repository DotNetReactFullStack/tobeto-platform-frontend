import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: { requestCount: 0 },
    reducers: {
        addRequest: state => {
            state.requestCount++;
        },
        removeRequest: state => {
            state.requestCount--;

            if (state.requestCount < 0) state.requestCount = 0;
        },
    },
});

export const loadingReducer = loadingSlice.reducer;
export const { addRequest, removeRequest } = loadingSlice.actions;