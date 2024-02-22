import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByCourseIdLessonListItemDto } from "../../models/lesson/getListByCourseIdLessonListItemDto";
import { GetByIdLessonResponse } from "../../models/lesson/getByIdLessonResponse";

interface LessonState {
  lessonsBySelectedCourseId: GetListByCourseIdLessonListItemDto[];
  lessonBySelectedId: GetByIdLessonResponse | null;
  selectedLessonId: number;
  loading: boolean;
  error: string | null;
}

const initialState: LessonState = {
  lessonsBySelectedCourseId: [],
  lessonBySelectedId: null,
  selectedLessonId: 1,
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
    setLessonBySelectedId: (
      state,
      action: PayloadAction<GetByIdLessonResponse>
    ) => {
      state.lessonBySelectedId = action.payload;
    },
    setSelectedLessonId: (state, action: PayloadAction<number>) => {
      state.selectedLessonId = action.payload;
    },
  },
});

export const lessonReducer = lessonSlice.reducer;
export const {
  setLessonsBySelectedCourseId,
  setLessonBySelectedId,
  setSelectedLessonId,
} = lessonSlice.actions;
