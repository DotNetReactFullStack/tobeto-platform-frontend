import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByAccountIdAccountCapabilityListItemDto } from "../../models/accountCapability/getListByAccountIdAccountCapabilityListItemDto";
import accountCapabilityService from "../../services/accountCapabilityService";
import { CreateAccountCapabilityRequest } from "../../models/accountCapability/createAccountCapabilityRequest";

interface AccountCapabilityState {
  accountCapabilities: GetListByAccountIdAccountCapabilityListItemDto[];
  accountCapabilityToAdd: CreateAccountCapabilityRequest | null;
  loading: boolean;
  error: string | null;
}

const initialState: AccountCapabilityState = {
  accountCapabilities: [],
  accountCapabilityToAdd: null,
  loading: false,
  error: null,
};

const accountCapabilitySlice = createSlice({
  name: "accountCapability",
  initialState,
  reducers: {
    setAccountCapabilities: (
      state,
      action: PayloadAction<GetListByAccountIdAccountCapabilityListItemDto[]>
    ) => {
      state.accountCapabilities = action.payload;
    },
    setAccountCapabilityToAdd: (
      state,
      action: PayloadAction<CreateAccountCapabilityRequest>
    ) => {
      state.accountCapabilityToAdd = action.payload;
    },
    clearAccountCapabilityToAdd: (state) => {
      state.accountCapabilityToAdd = null;
    },
  },
});

export const accountCapabilityReducer = accountCapabilitySlice.reducer;
export const {
  setAccountCapabilities,
  setAccountCapabilityToAdd,
  clearAccountCapabilityToAdd,
} = accountCapabilitySlice.actions;
