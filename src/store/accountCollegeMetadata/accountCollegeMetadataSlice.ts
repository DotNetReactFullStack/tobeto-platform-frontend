import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateAccountCollegeMetadataRequest } from "../../models/accountCollegeMetadatas/createAccountCollegeMetadataRequest";
import accountCollegeMetadataService from "../../services/accountCollegeMetadataService";
import { GetListByAccountIdAccountCollegeMetadataListItemDto } from "../../models/accountCollegeMetadatas/getListByAccountIdAccountCollegeMetadataListItemDto";

interface AccountCollegeMetadataState {
  accountCollegeMetadatas: GetListByAccountIdAccountCollegeMetadataListItemDto[];
  accountCollegeMetadataToAdd: CreateAccountCollegeMetadataRequest | null;
  loading: boolean;
  error: string | null;
  refreshData: boolean;
}

const initialState: AccountCollegeMetadataState = {
  accountCollegeMetadatas: [],
  accountCollegeMetadataToAdd: null,
  loading: false,
  error: null,
  refreshData: false,
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
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    }
  },
});

export const accountCollegeMetadataReducer =
  accountCollegeMetadataSlice.reducer;
export const {
  setAccountCollegeMetadatas,
  setAccountCollegeMetadataToAdd,
  clearAccountCollegeMetadataToAdd,
  refreshData
} = accountCollegeMetadataSlice.actions;
