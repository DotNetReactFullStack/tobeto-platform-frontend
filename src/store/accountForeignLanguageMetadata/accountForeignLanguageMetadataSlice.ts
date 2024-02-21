import { CreateAccountForeignLanguageMetadataRequest } from './../../models/accountForeignLanguageMetadatas/createAccountForeignLanguageMetadataRequest';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByAccountIdAccountForeignLanguageMetaDataListItemDto } from "../../models/accountForeignLanguageMetadatas/getListByAccountIdAccountForeignLanguageMetaDataListItemDto";

interface AccountForeignLanguageMetadataState {
    accountForeignLanguageMetadatas: GetListByAccountIdAccountForeignLanguageMetaDataListItemDto[];
    accountForeignLanguageMetadataToAdd: CreateAccountForeignLanguageMetadataRequest | null;
    loading: boolean;
    error: string | null;
}

const initialState: AccountForeignLanguageMetadataState = {
    accountForeignLanguageMetadatas: [],
    accountForeignLanguageMetadataToAdd: null,
    loading: false,
    error: null,
};

const accountForeignLanguageMetadataSlice = createSlice({
    name: "accountForeignLanguageMetadata",
    initialState,
    reducers: {
        setAccountForeignLanguageMetadatas: (
            state,
            action: PayloadAction<
                GetListByAccountIdAccountForeignLanguageMetaDataListItemDto[]
            >
        ) => {
            state.accountForeignLanguageMetadatas = action.payload;
        },
        setAccountForeignLanguageMetadataToAdd: (state, action: PayloadAction<CreateAccountForeignLanguageMetadataRequest>) => {
            state.accountForeignLanguageMetadataToAdd = action.payload;
        },
        clearAccountForeignLanguageMetadataToAdd: (state) => {
            state.accountForeignLanguageMetadataToAdd = null;
        }
    },
});

export const accountForeignLanguageMetadataReducer =
    accountForeignLanguageMetadataSlice.reducer;
export const { setAccountForeignLanguageMetadatas, setAccountForeignLanguageMetadataToAdd, clearAccountForeignLanguageMetadataToAdd } =
    accountForeignLanguageMetadataSlice.actions;