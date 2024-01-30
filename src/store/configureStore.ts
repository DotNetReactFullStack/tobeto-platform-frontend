import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { videoReducer } from "./video/videoSlice";

const rootReducer = combineReducers({
  video: videoReducer,
});

export const store = configureStore({ reducer: rootReducer });
