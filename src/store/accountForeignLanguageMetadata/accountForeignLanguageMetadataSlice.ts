import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateAccountForeignLanguageMetadataRequest } from "../../models/accountForeignLanguageMetadatas/createAccountForeignLanguageMetadataRequest";
import accountForeignLanguageMetadataService from "../../services/accountForeignLanguageMetadataService";


interface AccountForeignLanguageMetadataState {
    accountForeignLanguageMetadatas: any[];
    loading: boolean;
    error: string | null;
}

const initialState: AccountForeignLanguageMetadataState = {
    accountForeignLanguageMetadatas: [],
    loading: false,
    error: null,
};

const accountForeignLanguageMetadatasSlice = createSlice({
    name: "accountForeignLanguageMetadata",
    initialState,
    reducers: {
        setForeignLanguageMetadataToAccount: (
            state,
            action: PayloadAction<CreateAccountForeignLanguageMetadataRequest>
        ) => {
            accountForeignLanguageMetadataService.add(action.payload);
        },
    },
});

export const accountForeignLanguageMetadataReducer =
    accountForeignLanguageMetadatasSlice.reducer;
export const { setForeignLanguageMetadataToAccount } =
    accountForeignLanguageMetadatasSlice.actions;