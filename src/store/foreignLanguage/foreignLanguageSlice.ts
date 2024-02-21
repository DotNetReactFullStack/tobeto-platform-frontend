import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListForeignLanguageListItemDto } from "../../models/foreignLanguages/getListForeignLanguageListItemDto";

interface ForeignLanguageState {
    foreignLanguages: GetListForeignLanguageListItemDto[];
    loading: boolean;
    error: string | null;
}

const initialState: ForeignLanguageState = {
    foreignLanguages: [],
    loading: false,
    error: null,
};

const foreignLanguageSlice = createSlice({
    name: "foreignLanguage",
    initialState,
    reducers: {
        setForeignLanguages: (
            state,
            action: PayloadAction<GetListForeignLanguageListItemDto[]>
        ) => {
            state.foreignLanguages = action.payload;
        },
    },
});

export const foreignLanguageReducer = foreignLanguageSlice.reducer;
export const { setForeignLanguages } = foreignLanguageSlice.actions;