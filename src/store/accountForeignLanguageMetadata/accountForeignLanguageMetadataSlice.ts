import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateAccountForeignLanguageMetadataRequest } from "../../models/accountForeignLanguageMetadatas/createAccountForeignLanguageMetadataRequest";
import accountForeignLanguageMetadataService from "../../services/accountForeignLanguageMetadataService";
import { GetListByAccountIdAccountForeignLanguageMetaDataListItemDto } from "../../models/accountForeignLanguageMetadatas/getListByAccountIdAccountForeignLanguageMetaDataListItemDto";


interface AccountForeignLanguageMetadataState {
    accountForeignLanguageMetadatas: GetListByAccountIdAccountForeignLanguageMetaDataListItemDto[];
    loading: boolean;
    error: string | null;
}

const initialState: AccountForeignLanguageMetadataState = {
    accountForeignLanguageMetadatas: [],
    loading: false,
    error: null,
};

const accountForeignLanguageMetadataSlice = createSlice({
    name: "accountForeignLanguageMetadata",
    initialState,
    reducers: {
        setForeignLanguageMetadataToAccount: (
            state,
            action: PayloadAction<CreateAccountForeignLanguageMetadataRequest>
        ) => {
            accountForeignLanguageMetadataService.add(action.payload);
        },


        setAccountForeignLanguageMetadatas: (
            state,
            action: PayloadAction<
                GetListByAccountIdAccountForeignLanguageMetaDataListItemDto[]
            >
        ) => {
            state.accountForeignLanguageMetadatas = action.payload;
        },
    },
});

export const accountForeignLanguageMetadataReducer =
    accountForeignLanguageMetadataSlice.reducer;
export const { setForeignLanguageMetadataToAccount, setAccountForeignLanguageMetadatas } =
    accountForeignLanguageMetadataSlice.actions;


