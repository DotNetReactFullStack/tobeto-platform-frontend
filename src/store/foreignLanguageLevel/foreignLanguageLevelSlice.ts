import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListForeignLanguageLevelListItemDto } from "../../models/foreignLanguageLevels/getListForeignLanguageLevelListItemDto";

interface ForeignLanguageLevelState {
    foreignLanguageLevels: GetListForeignLanguageLevelListItemDto[];
    loading: boolean;
    error: string | null;
}

const initialState: ForeignLanguageLevelState = {
    foreignLanguageLevels: [],
    loading: false,
    error: null,
};

const foreignLanguageLevelSlice = createSlice({
    name: "foreignLanguageLevel",
    initialState,
    reducers: {
        setForeignLanguageLevels: (
            state,
            action: PayloadAction<GetListForeignLanguageLevelListItemDto[]>
        ) => {
            state.foreignLanguageLevels = action.payload;
        },
    },
});

export const foreignLanguageLevelReducer = foreignLanguageLevelSlice.reducer;
export const { setForeignLanguageLevels } = foreignLanguageLevelSlice.actions;