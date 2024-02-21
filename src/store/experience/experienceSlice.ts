import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByAccountIdExperienceListItemDto } from "../../models/experiences/getListByAccountIdExperienceListItemDto";
import { CreateExperienceCommand } from "../../models/experiences/createExperienceCommand";
import experienceService from "../../services/experienceService";

interface ExperienceState {
    accountExperiences: GetListByAccountIdExperienceListItemDto[];
    loading: boolean;
    error: string | null;
}

const initialState: ExperienceState = {
    accountExperiences: [],
    loading: false,
    error: null,
};

const accountExperienceSlice = createSlice({
    name: "accountExperience",
    initialState,
    reducers: {
        setAccountExperiences: (state, action: PayloadAction<GetListByAccountIdExperienceListItemDto[]>) => {
            state.accountExperiences = action.payload;
        },
        setExperienceToAccount: (state, action: PayloadAction<CreateExperienceCommand>) => {
            experienceService.add(action.payload)
        }
    },
});

export const accountExperienceReducer = accountExperienceSlice.reducer;
export const { setAccountExperiences, setExperienceToAccount } = accountExperienceSlice.actions;
