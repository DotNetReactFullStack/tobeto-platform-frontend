import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByCollegeIdEducationProgramListItemDto } from "../../models/educationPrograms/getListByCollegeIdEducationProgramListItemDto";

interface EducationProgramState {
  educationPrograms: GetListByCollegeIdEducationProgramListItemDto[];
  loading: boolean;
  error: string | null;
}

const initialState: EducationProgramState = {
  educationPrograms: [],
  loading: false,
  error: null,
};

const educationProgramSlice = createSlice({
  name: "educationProgram",
  initialState,
  reducers: {
    setEducationPrograms: (
      state,
      action: PayloadAction<GetListByCollegeIdEducationProgramListItemDto[]>
    ) => {
      state.educationPrograms = action.payload;
    },
  },
});

export const educationProgramReducer = educationProgramSlice.reducer;
export const { setEducationPrograms } = educationProgramSlice.actions;
