import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByCourseIdLessonListItemDto } from "../../models/lesson/getListByCourseIdLessonListItemDto";
import { GetByIdLessonResponse } from "../../models/lesson/getByIdLessonResponse";
import { UpdateLessonDurationRequest } from "../../models/lesson/updateLessonDurationRequest";

interface LessonState {
  lessonsBySelectedCourseId: GetListByCourseIdLessonListItemDto[];
  lessonBySelectedId: GetByIdLessonResponse | null;
  selectedLessonId: number;
  updateLessonDuration: UpdateLessonDurationRequest | null;
  loading: boolean;
  error: string | null;
}

const initialState: LessonState = {
  lessonsBySelectedCourseId: [],
  lessonBySelectedId: null,
  selectedLessonId: 1,
  updateLessonDuration: null,
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
    setUpdateLessonDuration: (
      state,
      action: PayloadAction<UpdateLessonDurationRequest>
    ) => {
      state.updateLessonDuration = action.payload;
    },
  },
});

export const lessonReducer = lessonSlice.reducer;
export const {
  setLessonsBySelectedCourseId,
  setLessonBySelectedId,
  setSelectedLessonId,
  setUpdateLessonDuration,
} = lessonSlice.actions;
