import { CreateExperienceCommand } from './../../models/experiences/createExperienceCommand';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByAccountIdExperienceListItemDto } from "../../models/experiences/getListByAccountIdExperienceListItemDto";

interface ExperienceState {
    accountExperiences: GetListByAccountIdExperienceListItemDto[];
    accountExperienceToAdd: CreateExperienceCommand | null,
    loading: boolean;
    error: string | null;
}

const initialState: ExperienceState = {
    accountExperiences: [],
    accountExperienceToAdd: null,
    loading: false,
    error: null,
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
        }
    },
});

export const accountExperienceReducer = accountExperienceSlice.reducer;
export const { setAccountExperiences, setAccountExperienceToAdd, clearAccountExperienceToAdd } = accountExperienceSlice.actions;
