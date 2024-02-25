import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AccountModel } from "../../models/account/accountModel";
import { UpdateAccountRequest } from "../../models/account/updateAccountRequest";

interface AccountState {
    currentAccount: AccountModel | null;
    updateAccount: UpdateAccountRequest | null;
    loading: boolean;
    error: string | null;
}

const accountSlice = createSlice({
    name: "account",
    initialState: {
        currentAccount: {},
        updateAccount: null as UpdateAccountRequest | null,
        loading: false,
        error: null,
    },
    reducers: {
        setAccount: (state, account: any) => {
            state.currentAccount = account;
            state.loading = false;
            state.error = null;
        },
        setAccountUpdate: (state, action: PayloadAction<UpdateAccountRequest>) => {
            state.updateAccount = action.payload;
        },
        logout: (state) => {
            state.currentAccount = {}
        }
    },
});

export const accountReducer = accountSlice.reducer;
export const { setAccount, setAccountUpdate, logout } = accountSlice.actions;
