import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CourseState {
  selectedCourseId: number;
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  selectedCourseId: 0,
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setSelectedCourseId: (state, action: PayloadAction<number>) => {
      state.selectedCourseId = action.payload;
    },
  },
});

export const courseReducer = courseSlice.reducer;
export const { setSelectedCourseId } = courseSlice.actions;
