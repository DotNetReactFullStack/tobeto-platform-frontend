import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByCourseIdLessonListItemDto } from "../../models/lesson/getListByCourseIdLessonListItemDto";

interface LessonState {
  lessonsBySelectedCourseId: GetListByCourseIdLessonListItemDto[];
  loading: boolean;
  error: string | null;
}

const initialState: LessonState = {
  lessonsBySelectedCourseId: [],
  loading: false,
  error: null,
};

const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    setLessonsBySelectedCourseId: (
      state,
      action: PayloadAction<GetListByCourseIdLessonListItemDto[]>
    ) => {
      state.lessonsBySelectedCourseId = action.payload;
    },
  },
});

export const lessonReducer = lessonSlice.reducer;
export const { setLessonsBySelectedCourseId } = lessonSlice.actions;
