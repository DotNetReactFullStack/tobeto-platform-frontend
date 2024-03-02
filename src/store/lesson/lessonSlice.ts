import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByCourseIdLessonListItemDto } from "../../models/lesson/getListByCourseIdLessonListItemDto";
import { GetByIdLessonResponse } from "../../models/lesson/getByIdLessonResponse";
import { UpdateLessonDurationRequest } from "../../models/lesson/updateLessonDurationRequest";
import { GetListLessonListItemDto } from "../../models/lesson/getListLessonListItemDto";

interface LessonState {
  lessonList: GetListLessonListItemDto[];
  filteredByCourseIdlessons: GetListByCourseIdLessonListItemDto[];
  filteredByIdlesson: GetByIdLessonResponse | null;
  selectedLessonId: number;
  updateLessonDuration: UpdateLessonDurationRequest | null;
  loading: boolean;
  error: string | null;
}

const initialState: LessonState = {
  lessonList: [],
  filteredByCourseIdlessons: [],
  filteredByIdlesson: null,
  selectedLessonId: 1,
  updateLessonDuration: null,
  loading: false,
  error: null,
};

const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    setLessonList: (
      state,
      action: PayloadAction<GetListLessonListItemDto[]>
    ) => {
      state.lessonList = action.payload;
    },
    setFilteredByCourseIdlessons: (
      state,
      action: PayloadAction<GetListByCourseIdLessonListItemDto[]>
    ) => {
      state.filteredByCourseIdlessons = action.payload;
    },
    clearFilteredByCourseIdlessons: (state) => {
      state.filteredByCourseIdlessons = [];
    },
    setFilteredByIdlesson: (
      state,
      action: PayloadAction<GetByIdLessonResponse>
    ) => {
      state.filteredByIdlesson = action.payload;
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
  setLessonList,
  setFilteredByCourseIdlessons,
  clearFilteredByCourseIdlessons,
  setFilteredByIdlesson,
  setSelectedLessonId,
  setUpdateLessonDuration,
} = lessonSlice.actions;
