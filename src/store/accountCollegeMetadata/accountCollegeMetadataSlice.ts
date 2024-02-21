import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateAccountCollegeMetadataRequest } from "../../models/accountCollegeMetadatas/createAccountCollegeMetadataRequest";
import accountCollegeMetadataService from "../../services/accountCollegeMetadataService";
import { GetListByAccountIdAccountCollegeMetadataListItemDto } from "../../models/accountCollegeMetadatas/getListByAccountIdAccountCollegeMetadataListItemDto";

interface AccountCollegeMetadataState {
  accountCollegeMetadatas: GetListByAccountIdAccountCollegeMetadataListItemDto[];
  accountCollegeMetadataToAdd: CreateAccountCollegeMetadataRequest | null;
  loading: boolean;
  error: string | null;
}

const initialState: AccountCollegeMetadataState = {
  accountCollegeMetadatas: [],
  accountCollegeMetadataToAdd: null,
  loading: false,
  error: null,
};

const accountCollegeMetadataSlice = createSlice({
  name: "accountCollegeMetadata",
  initialState,
  reducers: {
    setAccountCollegeMetadatas: (
      state,
      action: PayloadAction<
        GetListByAccountIdAccountCollegeMetadataListItemDto[]
      >
    ) => {
      state.accountCollegeMetadatas = action.payload;
    },
    setAccountCollegeMetadataToAdd: (
      state,
      action: PayloadAction<CreateAccountCollegeMetadataRequest>
    ) => {
      state.accountCollegeMetadataToAdd = action.payload;
    },
    clearAccountCollegeMetadataToAdd: (state) => {
      state.accountCollegeMetadataToAdd = null;
    },
  },
});

export const accountCollegeMetadataReducer =
  accountCollegeMetadataSlice.reducer;
export const {
  setAccountCollegeMetadatas,
  setAccountCollegeMetadataToAdd,
  clearAccountCollegeMetadataToAdd,
} = accountCollegeMetadataSlice.actions;
