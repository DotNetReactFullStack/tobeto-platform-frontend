import { CreateExperienceCommand } from './../../models/experiences/createExperienceCommand';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByAccountIdExperienceListItemDto } from "../../models/experiences/getListByAccountIdExperienceListItemDto";

interface ExperienceState {
    accountExperiences: GetListByAccountIdExperienceListItemDto[];
    accountExperienceToAdd: CreateExperienceCommand | null,
    loading: boolean;
    error: string | null;
    refreshData: boolean;
}

const initialState: ExperienceState = {
    accountExperiences: [],
    accountExperienceToAdd: null,
    loading: false,
    error: null,
    refreshData: false,
};

const accountExperienceSlice = createSlice({
    name: "experience",
    initialState,
    reducers: {
        setAccountExperiences: (state, action: PayloadAction<GetListByAccountIdExperienceListItemDto[]>) => {
            state.accountExperiences = action.payload;
        },
        setAccountExperienceToAdd: (state, action: PayloadAction<CreateExperienceCommand>) => {
            state.accountExperienceToAdd = action.payload;
        },
        clearAccountExperienceToAdd: (state) => {
            state.accountExperienceToAdd = null;
        },
        refreshData: (state) => {
            state.refreshData = !state.refreshData;
        }
    },
});

export const accountExperienceReducer = accountExperienceSlice.reducer;
export const { setAccountExperiences, setAccountExperienceToAdd, clearAccountExperienceToAdd, refreshData } = accountExperienceSlice.actions;
