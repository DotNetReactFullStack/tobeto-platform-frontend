import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AccountModel } from "../../models/account/accountModel";

interface AccountState {
    currentAccount: AccountModel | null;
    loading: boolean;
    error: string | null;
}

const accountSlice = createSlice({
    name: "account",
    initialState: {
        currentAccount: {},
        loading: false,
        error: null,
    },
    reducers: {
        setAccount: (state, account: any) => {
            state.currentAccount = account;
            state.loading = false;
            state.error = null;
        },
        logout: (state) => {
            state.currentAccount = {}
        }
    },
});

export const accountReducer = accountSlice.reducer;
export const { setAccount, logout } = accountSlice.actions;
