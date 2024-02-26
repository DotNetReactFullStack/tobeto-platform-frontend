import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LearningPathState {
  totalDuration: number;
  lessonCount: number;
  loading: boolean;
  error: string | null;
}

const initialState: LearningPathState = {
  totalDuration: 0,
  lessonCount: 0,
  loading: false,
  error: null,
};

const learningPathSlice = createSlice({
  name: "learningPath",
  initialState,
  reducers: {
    setTotalDuration: (state, action: PayloadAction<number>) => {
      state.totalDuration = action.payload;
    },
    setLessonCount: (state, action: PayloadAction<number>) => {
      state.lessonCount = action.payload;
    },
  },
});

export const learningPathReducer = learningPathSlice.reducer;
export const { setTotalDuration, setLessonCount } = learningPathSlice.actions;
