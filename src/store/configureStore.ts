import { accountForeignLanguageMetadataReducer } from './accountForeignLanguageMetadata/accountForeignLanguageMetadataSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { videoReducer } from "./video/videoSlice";
import { authReducer } from "./auth/authSlice";
import { accountReducer } from "./account/accountSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { accountCapabilityReducer } from "./accountCapability/accountCapabilitySlice";
import { capabilityReducer } from "./capability/capabilitySlice";
import { graduationStatusReducer } from "./graduationStatus/graduationStatusSlice";
import { collegeReducer } from "./college/collegeSlice";
import { educationProgramReducer } from "./educationProgram/educationProgramSlice";
import { accountExperienceReducer } from "./experience/experienceSlice";
import { foreignLanguageReducer } from "./foreignLanguage/foreignLanguageSlice";
import { foreignLanguageLevelReducer } from "./foreignLanguageLevel/foreignLanguageLevelSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  video: videoReducer,
  account: accountReducer,
  capability: capabilityReducer,
  accountCapability: accountCapabilityReducer,
  graduationStatus: graduationStatusReducer,
  college: collegeReducer,
  educationProgram: educationProgramReducer,
  accountExperience: accountExperienceReducer,
  foreignLanguage: foreignLanguageReducer,
  foreignLanguageLevel: foreignLanguageLevelReducer,
  accountForeignLanguageMetadata: accountForeignLanguageMetadataReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({ reducer: persistedReducer });

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
