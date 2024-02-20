import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateAccountCollegeMetadataRequest } from "../../models/accountCollegeMetadatas/createAccountCollegeMetadataRequest";
import accountCollegeMetadataService from "../../services/accountCollegeMetadataService";
import { GetListByAccountIdAccountCollegeMetadataListItemDto } from "../../models/accountCollegeMetadatas/getListByAccountIdAccountCollegeMetadataListItemDto";

interface AccountCollegeMetadataState {
  accountCollegeMetadatas: GetListByAccountIdAccountCollegeMetadataListItemDto[];
  loading: boolean;
  error: string | null;
}

const initialState: AccountCollegeMetadataState = {
  accountCollegeMetadatas: [],
  loading: false,
  error: null,
};

const accountCollegeMetadataSlice = createSlice({
  name: "accountCollegeMetadata",
  initialState,
  reducers: {
    setCollegeMetadataToAccount: (
      state,
      action: PayloadAction<CreateAccountCollegeMetadataRequest>
    ) => {
      accountCollegeMetadataService.add(action.payload);
    },
    setAccountCollegeMetadatas: (
      state,
      action: PayloadAction<
        GetListByAccountIdAccountCollegeMetadataListItemDto[]
      >
    ) => {
      state.accountCollegeMetadatas = action.payload;
    },
  },
});

export const accountCollegeMetadataReducer =
  accountCollegeMetadataSlice.reducer;
export const { setCollegeMetadataToAccount, setAccountCollegeMetadatas } =
  accountCollegeMetadataSlice.actions;
