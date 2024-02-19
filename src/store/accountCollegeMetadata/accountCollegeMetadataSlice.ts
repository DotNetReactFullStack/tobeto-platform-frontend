import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateAccountCollegeMetadataRequest } from "../../models/accountCollegeMetadatas/createAccountCollegeMetadataRequest";
import accountCollegeMetadataService from "../../services/accountCollegeMetadataService";

interface AccountCollegeMetadataState {
  accountCapabilities: any[];
  loading: boolean;
  error: string | null;
}

const initialState: AccountCollegeMetadataState = {
  accountCapabilities: [],
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
  },
});

export const accountCollegeMetadataReducer =
  accountCollegeMetadataSlice.reducer;
export const { setCollegeMetadataToAccount } =
  accountCollegeMetadataSlice.actions;
