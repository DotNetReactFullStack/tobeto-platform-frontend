import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface VideoState {
  videoId: string;
}

const videoSlice = createSlice({
  name: "video",
  initialState: { videoId: "S_A_VVSQdpU" },
  reducers: {
    setVideoId: (state, action: PayloadAction<string>) => {
      state.videoId = action.payload;
    },
  },
});

export const videoReducer = videoSlice.reducer;
export const { setVideoId } = videoSlice.actions;
