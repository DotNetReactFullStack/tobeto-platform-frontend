import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByLearningPathIdCourseLearningPathListItemDto } from "../../models/courseLearningPaths/GetListByLearningPathIdCourseLearningPathListItemDto";

interface CourseLearningPathState {
  courseLearningPathsBySelectedLearningPathId: GetListByLearningPathIdCourseLearningPathListItemDto[];
  loading: boolean;
  error: string | null;
}

const initialState: CourseLearningPathState = {
  courseLearningPathsBySelectedLearningPathId: [],
  loading: false,
  error: null,
};

const courseLearningPathSlice = createSlice({
  name: "courseLearningPath",
  initialState,
  reducers: {
    setCourseLearningPathsBySelectedLearningPathId: (
      state,
      action: PayloadAction<
        GetListByLearningPathIdCourseLearningPathListItemDto[]
      >
    ) => {
      state.courseLearningPathsBySelectedLearningPathId = action.payload;
    },
  },
});

export const courseLearningPathReducer = courseLearningPathSlice.reducer;
export const { setCourseLearningPathsBySelectedLearningPathId } =
  courseLearningPathSlice.actions;
