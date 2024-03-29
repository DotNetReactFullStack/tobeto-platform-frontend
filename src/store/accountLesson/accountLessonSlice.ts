import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetByAccountIdAndLessonIdAccountLessonResponse } from "../../models/accountLesson/getByAccountIdAndLessonIdAccountLessonResponse";
import { updateAccountLessonIsCompleteRequest } from "../../models/accountLesson/updateAccountLessonIsCompleteRequest";
import { GetListByAccountIdAccountLessonListItemDto } from "../../models/accountLesson/getListByAccountIdAccountLessonListItemDto";
import { GetListByAccountIdLearningPathAccountLessonListItemDto } from "../../models/accountLesson/getListByAccountIdLearningPathAccountLessonListItemDto";

interface AccountLessonState {
  accountLessonsBySelectedAccountId: GetListByAccountIdAccountLessonListItemDto[];
  filteredByLessonIdAccountLessonsBySelectedAccountId: GetByAccountIdAndLessonIdAccountLessonResponse | null;
  accountLessonIsCompleteRequest: updateAccountLessonIsCompleteRequest | null;
  accountLessonLearningPathDtosByAccountId: GetListByAccountIdLearningPathAccountLessonListItemDto[];
  lessonVideoPoint: number;
  lessonVideoIsComplete: boolean;
  lessonVideoIcon: string;
  lessonVideoIconColor: string;
  lessonVideoStatusText: string;
  lessonVideoStatusTextColor: string;

  loading: boolean;
  error: string | null;
}

const initialState: AccountLessonState = {
  accountLessonsBySelectedAccountId: [],
  filteredByLessonIdAccountLessonsBySelectedAccountId: null,
  accountLessonIsCompleteRequest: null,
  lessonVideoIsComplete: false,
  accountLessonLearningPathDtosByAccountId: [],
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

    setFilteredByLessonIdAccountLessonsBySelectedAccountId: (
      state,
      action: PayloadAction<GetByAccountIdAndLessonIdAccountLessonResponse>
    ) => {
      state.filteredByLessonIdAccountLessonsBySelectedAccountId =
        action.payload;
    },
    setAccountLessonIsCompleteRequest: (
      state,
      action: PayloadAction<updateAccountLessonIsCompleteRequest>
    ) => {
      state.accountLessonIsCompleteRequest = action.payload;
    },
    setAccountLessonLearningPathDtoBySelectedAccountId: (
      state,
      action: PayloadAction<
        GetListByAccountIdLearningPathAccountLessonListItemDto[]
      >
    ) => {
      state.accountLessonLearningPathDtosByAccountId = action.payload;
    },
    setLessonVideoPoint: (state, action: PayloadAction<number>) => {
      state.lessonVideoPoint = action.payload;
    },
    setLessonVideoIsComplete: (state, action: PayloadAction<boolean>) => {
      state.lessonVideoIsComplete = action.payload;
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
  setFilteredByLessonIdAccountLessonsBySelectedAccountId,
  setAccountLessonIsCompleteRequest,
  setAccountLessonLearningPathDtoBySelectedAccountId,
  setLessonVideoPoint,
  setLessonVideoIsComplete,
  setLessonVideoIcon,
  setLessonVideoIconColor,
  setLessonVideoStatusText,
  setLessonVideoStatusTextColor,
} = accountLessonSlice.actions;
