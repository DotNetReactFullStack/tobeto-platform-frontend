import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByAccountIdAccountLearningPathListItemDto } from "../../models/accountLearningPaths/getListByAccountIdAccountLearningPathListItemDto";
import { GetByAccountIdAndLearningPathIdAccountLearningPathResponse } from "../../models/accountLearningPaths/getByAccountIdAndLearningPathIdAccountLearningPathResponse";

interface AccountLearningPathState {
  accountLearningPaths: GetListByAccountIdAccountLearningPathListItemDto[];
  accountLearningPathBySelectedAccountIdAndLearningPathId: GetByAccountIdAndLearningPathIdAccountLearningPathResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: AccountLearningPathState = {
  accountLearningPaths: [],
  accountLearningPathBySelectedAccountIdAndLearningPathId: null,
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
  },
});

export const accountLearningPathReducer = accountLearningPathSlice.reducer;
export const {
  setAccountLearningPaths,
  setAccountLearningPathBySelectedAccountIdAndLearningPathId,
} = accountLearningPathSlice.actions;
