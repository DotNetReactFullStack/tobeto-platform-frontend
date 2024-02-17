import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { videoReducer } from "./video/videoSlice";
import { authReducer } from "./auth/authSlice";
import { accountReducer } from "./account/accountSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { accountCapabilityReducer } from "./accountCapability/accountCapabilitySlice";
import { capabilityReducer } from "./capability/capabilitySlice";

const rootReducer = combineReducers({
  auth: authReducer,
  video: videoReducer,
  account: accountReducer,
  capability: capabilityReducer,
  accountCapability: accountCapabilityReducer,
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({ reducer: persistedReducer });

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
