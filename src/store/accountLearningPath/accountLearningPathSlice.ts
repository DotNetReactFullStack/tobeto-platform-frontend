import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByAccountIdAccountLearningPathListItemDto } from "../../models/accountLearningPaths/getListByAccountIdAccountLearningPathListItemDto";
import { GetListByLearningPathIdAccountLearningPathListItemDto } from "../../models/accountLearningPaths/getListByLearningPathIdAccountLearningPathListItemDto";

interface AccountLearningPathState {
  accountLearningPaths: GetListByAccountIdAccountLearningPathListItemDto[];
  accountLearningPathsBySelectedLearningPathId: GetListByLearningPathIdAccountLearningPathListItemDto[];
  loading: boolean;
  error: string | null;
}

const initialState: AccountLearningPathState = {
  accountLearningPaths: [],
  accountLearningPathsBySelectedLearningPathId: [],
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
    setAccountLearningPathsBySelectedLearningPathId: (
      state,
      action: PayloadAction<
        GetListByLearningPathIdAccountLearningPathListItemDto[]
      >
    ) => {
      state.accountLearningPathsBySelectedLearningPathId = action.payload;
    },
  },
});

export const accountLearningPathReducer = accountLearningPathSlice.reducer;
export const {
  setAccountLearningPaths,
  setAccountLearningPathsBySelectedLearningPathId,
} = accountLearningPathSlice.actions;
