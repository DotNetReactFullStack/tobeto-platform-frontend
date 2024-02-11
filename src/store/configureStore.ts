import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { videoReducer } from "./video/videoSlice";
import { authReducer } from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  video: videoReducer,
});

export const store = configureStore({ reducer: rootReducer });
