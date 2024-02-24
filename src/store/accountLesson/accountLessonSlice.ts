import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetByAccountIdAndLessonIdAccountLessonResponse } from "../../models/accountLesson/getByAccountIdAndLessonIdAccountLessonResponse";
import { updateAccountLessonIsCompleteRequest } from "../../models/accountLesson/updateAccountLessonIsCompleteRequest";
import { GetListByAccountIdAccountLessonListItemDto } from "../../models/accountLesson/getListByAccountIdAccountLessonListItemDto";

interface AccountLessonState {
  accountLessonsBySelectedAccountId: GetListByAccountIdAccountLessonListItemDto[];
  accountLessonBySelectedAccountIdAndLessonId: GetByAccountIdAndLessonIdAccountLessonResponse | null;
  accountLessonIsCompleteRequest: updateAccountLessonIsCompleteRequest | null;
  lessonElementIcon: string;
  lessonElementIconColor: string;
  lessonVideoPoint: number;
  lessonVideoIcon: string;
  lessonVideoIconColor: string;
  lessonVideoStatusText: string;
  lessonVideoStatusTextColor: string;
  loading: boolean;
  error: string | null;
}

const initialState: AccountLessonState = {
  accountLessonsBySelectedAccountId: [],
  accountLessonBySelectedAccountIdAndLessonId: null,
  accountLessonIsCompleteRequest: null,
  lessonElementIcon: "",
  lessonElementIconColor: "",
  lessonVideoPoint: 0,
  lessonVideoIcon: "",
  lessonVideoIconColor: "",
  lessonVideoStatusText: "",
  lessonVideoStatusTextColor: "",
  loading: false,
  error: null,
};

const accountLessonSlice = createSlice({
  name: "accountLesson",
  initialState,
  reducers: {
    setAccountLessonsBySelectedAccountId: (
      state,
      action: PayloadAction<GetListByAccountIdAccountLessonListItemDto[]>
    ) => {
      state.accountLessonsBySelectedAccountId = action.payload;
    },

    setAccountLessonBySelectedAccountIdAndLessonId: (
      state,
      action: PayloadAction<GetByAccountIdAndLessonIdAccountLessonResponse>
    ) => {
      state.accountLessonBySelectedAccountIdAndLessonId = action.payload;
    },
    setAccountLessonIsCompleteRequest: (
      state,
      action: PayloadAction<updateAccountLessonIsCompleteRequest>
    ) => {
      state.accountLessonIsCompleteRequest = action.payload;
    },
    setLessonVideoPoint: (state, action: PayloadAction<number>) => {
      state.lessonVideoPoint = action.payload;
    },
    setLessonElementIcon: (state, action: PayloadAction<string>) => {
      state.lessonElementIcon = action.payload;
    },
    setLessonElementIconColor: (state, action: PayloadAction<string>) => {
      state.lessonElementIconColor = action.payload;
    },
    setLessonVideoIcon: (state, action: PayloadAction<string>) => {
      state.lessonVideoIcon = action.payload;
    },
    setLessonVideoIconColor: (state, action: PayloadAction<string>) => {
      state.lessonVideoIconColor = action.payload;
    },
    setLessonVideoStatusText: (state, action: PayloadAction<string>) => {
      state.lessonVideoStatusText = action.payload;
    },
    setLessonVideoStatusTextColor: (state, action: PayloadAction<string>) => {
      state.lessonVideoStatusTextColor = action.payload;
    },
  },
});

export const accountLessonReducer = accountLessonSlice.reducer;
export const {
  setAccountLessonsBySelectedAccountId,
  setAccountLessonBySelectedAccountIdAndLessonId,
  setAccountLessonIsCompleteRequest,
  setLessonElementIcon,
  setLessonElementIconColor,
  setLessonVideoPoint,
  setLessonVideoIcon,
  setLessonVideoIconColor,
  setLessonVideoStatusText,
  setLessonVideoStatusTextColor,
} = accountLessonSlice.actions;
