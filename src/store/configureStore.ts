import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { videoReducer } from "./video/videoSlice";
import { authReducer } from "./auth/authSlice";
import { accountReducer } from "./account/accountSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  video: videoReducer,
  account: accountReducer,
});

export const store = configureStore({ reducer: rootReducer });
