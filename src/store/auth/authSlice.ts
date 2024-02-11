import { createSlice } from "@reduxjs/toolkit";
import tokenService from "../../core/services/tokenService";
import { useDispatch } from "react-redux";

const getInitialState = () => {
    if (tokenService.hasToken()) {
        return { isAuthenticated: true };
    }
    return { isAuthenticated: false };
};

const authSlice = createSlice({
    name: "auth",
    initialState: getInitialState(),
    reducers: {
        setToken: (state, action) => {
            tokenService.setToken(action.payload);
            state.isAuthenticated = true;
        },
        removeToken: (state) => {
            tokenService.removeToken();
            state.isAuthenticated = false;
        },
    },
});

export const authReducer = authSlice.reducer;
export const { setToken, removeToken } = authSlice.actions;