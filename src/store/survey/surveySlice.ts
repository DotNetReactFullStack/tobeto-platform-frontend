import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListSurveyListItemDto } from '../../models/surveys/getListSurveyListItemDto';

interface SurveyState {
    surveys: GetListSurveyListItemDto[];
    loading: boolean;
    error: string | null;
    refreshData: boolean;
}

const initialState: SurveyState = {
    surveys: [],
    loading: false,
    error: null,
    refreshData: false,
};

const surveySlice = createSlice({
    name: "survey",
    initialState,
    reducers: {
        setSurveys: (state, action: PayloadAction<GetListSurveyListItemDto[]>) => {
            state.surveys = action.payload;
        },
        refreshData: (state) => {
            state.refreshData = !state.refreshData;
        }
    },
});

export const surveyReducer = surveySlice.reducer;
export const { setSurveys, refreshData } = surveySlice.actions;
