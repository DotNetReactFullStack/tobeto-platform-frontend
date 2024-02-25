import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface VideoState {
  videoId: string;
  lessonVideoDuration: number;
  lessonVideoCurrentDuration: number;
}

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoId: "S_A_VVSQdpU",
    lessonVideoDuration: 0,
    lessonVideoCurrentDuration: 0,
  },
  reducers: {
    setVideoId: (state, action: PayloadAction<string>) => {
      state.videoId = action.payload;
    },
    setLessonVideoDuration: (state, action: PayloadAction<number>) => {
      state.lessonVideoDuration = action.payload;
    },
    setLessonVideoCurrentDuration: (state, action: PayloadAction<number>) => {
      state.lessonVideoCurrentDuration = action.payload;
    },
  },
});

export const videoReducer = videoSlice.reducer;
export const {
  setVideoId,
  setLessonVideoDuration,
  setLessonVideoCurrentDuration,
} = videoSlice.actions;
