import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetByAccountIdAndLessonIdAccountLessonResponse } from "../../models/accountLesson/getByAccountIdAndLessonIdAccountLessonResponse";

interface AccountLessonState {
  accountLessonBySelectedAccountIdAndLessonId: GetByAccountIdAndLessonIdAccountLessonResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: AccountLessonState = {
  accountLessonBySelectedAccountIdAndLessonId: null,
  loading: false,
  error: null,
};

const accountLessonSlice = createSlice({
  name: "accountLesson",
  initialState,
  reducers: {
    setAccountLessonBySelectedAccountIdAndLessonId: (
      state,
      action: PayloadAction<GetByAccountIdAndLessonIdAccountLessonResponse>
    ) => {
      state.accountLessonBySelectedAccountIdAndLessonId = action.payload;
    },
  },
});

export const accountLessonReducer = accountLessonSlice.reducer;
export const { setAccountLessonBySelectedAccountIdAndLessonId } =
  accountLessonSlice.actions;
