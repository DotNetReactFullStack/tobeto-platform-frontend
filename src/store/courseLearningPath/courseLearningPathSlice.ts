import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByLearningPathIdCourseLearningPathListItemDto } from "../../models/courseLearningPaths/GetListByLearningPathIdCourseLearningPathListItemDto";
import { GetListCourseLearningPathListItemDto } from "../../models/courseLearningPaths/getListCourseLearningPathListItemDto";

interface CourseLearningPathState {
  courseLearningPaths: GetListCourseLearningPathListItemDto[];
  filteredByLearningPathIdCourseLearningPaths: GetListByLearningPathIdCourseLearningPathListItemDto[];
  loading: boolean;
  error: string | null;
}

const initialState: CourseLearningPathState = {
  courseLearningPaths: [],
  filteredByLearningPathIdCourseLearningPaths: [],
  loading: false,
  error: null,
};

const courseLearningPathSlice = createSlice({
  name: "courseLearningPath",
  initialState,
  reducers: {
    setCourseLearningPaths: (
      state,
      action: PayloadAction<GetListCourseLearningPathListItemDto[]>
    ) => {
      state.courseLearningPaths = action.payload;
    },

    setFilteredByLearningPathIdCourseLearningPaths: (
      state,
      action: PayloadAction<
        GetListByLearningPathIdCourseLearningPathListItemDto[]
      >
    ) => {
      state.filteredByLearningPathIdCourseLearningPaths = action.payload;
    },
  },
});

export const courseLearningPathReducer = courseLearningPathSlice.reducer;
export const {
  setCourseLearningPaths,
  setFilteredByLearningPathIdCourseLearningPaths,
} = courseLearningPathSlice.actions;
