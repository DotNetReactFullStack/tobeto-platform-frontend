import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByAccountIdAccountLearningPathListItemDto } from "../../models/accountLearningPaths/getListByAccountIdAccountLearningPathListItemDto";
import { GetByAccountIdAndLearningPathIdAccountLearningPathResponse } from "../../models/accountLearningPaths/getByAccountIdAndLearningPathIdAccountLearningPathResponse";
import { GetListByLearningPathIdAccountLearningPathListItemDto } from "../../models/accountLearningPaths/getListByLearningPathIdAccountLearningPathListItemDto";
import { UpdateAccountLearningPathIsSavedRequest } from "../../models/accountLearningPaths/UpdateAccountLearningPathIsSavedRequest";
import { UpdateAccountLearningPathIsLikedRequest } from "../../models/accountLearningPaths/UpdateAccountLearningPathIsLikedRequest";
import { updateAccountLearningPathPercentCompleteRequest } from "../../models/accountLearningPaths/updateAccountLearningPathPercentCompleteRequest";

interface AccountLearningPathState {
  accountLearningPaths: GetListByAccountIdAccountLearningPathListItemDto[];
  accountLearningPathBySelectedAccountIdAndLearningPathId: GetByAccountIdAndLearningPathIdAccountLearningPathResponse | null;
  accountLearningPathBySelectedLearningPathId: GetListByLearningPathIdAccountLearningPathListItemDto[];
  learningPathLikeCount: number;
  accountLearningPathIsLikedRequest: UpdateAccountLearningPathIsLikedRequest | null;
  learningPathLikeStatus: boolean;
  accountLearningPathIsSavedRequest: UpdateAccountLearningPathIsSavedRequest | null;
  learningPathSaveStatus: boolean;
  accountLearningPathPercentCompleteRequest: updateAccountLearningPathPercentCompleteRequest | null;
  learningPathActivityScore: number;
  learningPathPercentComplete: number;
  loading: boolean;
  error: string | null;
}

const initialState: AccountLearningPathState = {
  accountLearningPaths: [],
  accountLearningPathBySelectedAccountIdAndLearningPathId: null,
  accountLearningPathBySelectedLearningPathId: [],
  learningPathLikeCount: 0,
  accountLearningPathIsLikedRequest: null,
  learningPathLikeStatus: false,
  accountLearningPathIsSavedRequest: null,
  learningPathSaveStatus: false,
  accountLearningPathPercentCompleteRequest: null,
  learningPathActivityScore: 0,
  learningPathPercentComplete: 0,
  loading: false,
  error: null,
};

const accountLearningPathSlice = createSlice({
  name: "accountLearningPath",
  initialState,
  reducers: {
    setAccountLearningPaths: (
      state,
      action: PayloadAction<GetListByAccountIdAccountLearningPathListItemDto[]>
    ) => {
      state.accountLearningPaths = action.payload;
    },
    setAccountLearningPathBySelectedAccountIdAndLearningPathId: (
      state,
      action: PayloadAction<GetByAccountIdAndLearningPathIdAccountLearningPathResponse>
    ) => {
      state.accountLearningPathBySelectedAccountIdAndLearningPathId =
        action.payload;
    },
    setAccountLearningPathBySelectedLearningPathId: (
      state,
      action: PayloadAction<
        GetListByLearningPathIdAccountLearningPathListItemDto[]
      >
    ) => {
      state.accountLearningPathBySelectedLearningPathId = action.payload;
    },
    setLearningPathLikeCount: (state, action: PayloadAction<number>) => {
      state.learningPathLikeCount = action.payload;
    },
    incrementLearningPathLikeCount: (state) => {
      state.learningPathLikeCount = state.learningPathLikeCount + 1;
    },
    decrementLearningPathLikeCount: (state) => {
      state.learningPathLikeCount = state.learningPathLikeCount - 1;
    },
    setAccountLearningPathIsLikedRequest: (
      state,
      action: PayloadAction<UpdateAccountLearningPathIsLikedRequest>
    ) => {
      state.accountLearningPathIsLikedRequest = action.payload;
    },
    setLearningPathLikeStatus: (state, action: PayloadAction<boolean>) => {
      state.learningPathLikeStatus = action.payload;
    },
    toggleLearningPathLikeStatus: (state) => {
      state.learningPathLikeStatus = !state.learningPathLikeStatus;
    },
    setAccountLearningPathIsSavedRequest: (
      state,
      action: PayloadAction<UpdateAccountLearningPathIsSavedRequest>
    ) => {
      state.accountLearningPathIsSavedRequest = action.payload;
    },
    setLearningPathSaveStatus: (state, action: PayloadAction<boolean>) => {
      state.learningPathSaveStatus = action.payload;
    },
    toggleLearningPathSaveStatus: (state) => {
      state.learningPathSaveStatus = !state.learningPathSaveStatus;
    },
    setAccountLearningPathPercentCompleteRequest: (
      state,
      action: PayloadAction<updateAccountLearningPathPercentCompleteRequest>
    ) => {
      state.accountLearningPathPercentCompleteRequest = action.payload;
    },
    setLearningPathActivityScore: (state, action: PayloadAction<number>) => {
      state.learningPathActivityScore = action.payload;
    },
    setLearningPathPercentComplete: (state, action: PayloadAction<number>) => {
      state.learningPathPercentComplete = action.payload;
    },
  },
});

export const accountLearningPathReducer = accountLearningPathSlice.reducer;
export const {
  setAccountLearningPaths,
  setAccountLearningPathBySelectedAccountIdAndLearningPathId,
  setAccountLearningPathBySelectedLearningPathId,
  setLearningPathLikeCount,
  incrementLearningPathLikeCount,
  decrementLearningPathLikeCount,
  setAccountLearningPathIsLikedRequest,
  setLearningPathLikeStatus,
  toggleLearningPathLikeStatus,
  setAccountLearningPathIsSavedRequest,
  setLearningPathSaveStatus,
  toggleLearningPathSaveStatus,
  setAccountLearningPathPercentCompleteRequest,
  setLearningPathActivityScore,
  setLearningPathPercentComplete,
} = accountLearningPathSlice.actions;
