import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LastWatchedVideo {
  learningPathId: string;
  videoId: string;
  lessonId: number;
}

interface VideoState {
  videoId: string;
  lessonVideoDuration: number;
  lessonVideoCurrentDuration: number;
  lastWatchedVideos: LastWatchedVideo[];
}

const initialState: VideoState = {
  videoId: "",
  lessonVideoDuration: 0,
  lessonVideoCurrentDuration: 0,
  lastWatchedVideos: [],
};

const videoSlice = createSlice({
  name: "video",
  initialState,
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
    setLastWatchedVideoForLearningPath: (
      state,
      action: PayloadAction<{
        learningPathId: string;
        videoId: string;
        lessonId: number;
      }>
    ) => {
      const { learningPathId, videoId, lessonId } = action.payload;
      // const existingVideoIndex = state.lastWatchedVideos.findIndex(
      //   (video : LastWatchedVideo) => video.learningPathId === learningPathId
      // );
      if (!state.lastWatchedVideos) {
        state.lastWatchedVideos = [];
      }
      const existingVideoIndex = state.lastWatchedVideos
        ? state.lastWatchedVideos.findIndex(
          (video: LastWatchedVideo) => video.learningPathId === learningPathId
        )
        : -1;

      if (existingVideoIndex !== -1) {
        state.lastWatchedVideos[existingVideoIndex].videoId = videoId;
        state.lastWatchedVideos[existingVideoIndex].lessonId = lessonId;
      } else {
        state.lastWatchedVideos.push({ learningPathId, videoId, lessonId });

      }
    },
  },
});

export const videoReducer = videoSlice.reducer;
export const {
  setVideoId,
  setLessonVideoDuration,
  setLessonVideoCurrentDuration,
  setLastWatchedVideoForLearningPath,
} = videoSlice.actions;
