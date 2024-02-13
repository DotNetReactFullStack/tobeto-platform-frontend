import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { videoReducer } from "./video/videoSlice";
import { authReducer } from "./auth/authSlice";
import { accountReducer } from "./account/accountSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const rootReducer = combineReducers({
  auth: authReducer,
  video: videoReducer,
  account: accountReducer,
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer });
