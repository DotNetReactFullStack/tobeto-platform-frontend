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
        setAccount: (state, action: PayloadAction<string>) => {
            state.currentAccount = action.payload;
            state.loading = false;
            state.error = null;
        },
    },
});

export const accountReducer = accountSlice.reducer;
export const { setAccount } = accountSlice.actions;
