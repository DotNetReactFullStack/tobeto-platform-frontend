import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByAccountIdAccountLearningPathListItemDto } from "../../models/accountLearningPath/getListByAccountIdAccountLearningPathListItemDto";

interface AccountLearningPathState {
  accountLearningPaths: GetListByAccountIdAccountLearningPathListItemDto[];
  loading: boolean;
  error: string | null;
}

const initialState: AccountLearningPathState = {
  accountLearningPaths: [],
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
  },
});

export const accountLearningPathReducer = accountLearningPathSlice.reducer;
export const { setAccountLearningPaths } = accountLearningPathSlice.actions;
