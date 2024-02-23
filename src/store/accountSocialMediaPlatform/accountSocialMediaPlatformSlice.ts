import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateAccountSocialMediaPlatformRequest } from "../../models/accountSocialMediaPlatforms/createAccountSocialMediaPlatformRequest";
import accountSocialMediaPlatformService from "../../services/accountSocialMediaPlatformService";
import { GetListByAccountIdAccountSocialMediaPlatformListItemDto } from "../../models/accountSocialMediaPlatforms/getListByAccountIdAccountSocialMediaPlatformListItemDto";

interface AccountSocialMediaPlatformState {
  accountSocialMediaPlatforms: GetListByAccountIdAccountSocialMediaPlatformListItemDto[];
  accountSocialMediaPlatformToAdd: CreateAccountSocialMediaPlatformRequest | null;
  loading: boolean;
  error: string | null;
  refreshData: boolean;
}

const initialState: AccountSocialMediaPlatformState = {
  accountSocialMediaPlatforms: [],
  accountSocialMediaPlatformToAdd: null,
  loading: false,
  error: null,
  refreshData: false,
};

const accountSocialMediaPlatformSlice = createSlice({
  name: "accountSocialMediaPlatform",
  initialState,
  reducers: {
    setAccountSocialMediaPlatforms: (
      state,
      action: PayloadAction<
        GetListByAccountIdAccountSocialMediaPlatformListItemDto[]
      >
    ) => {
      state.accountSocialMediaPlatforms = action.payload;
    },
    setAccountSocialMediaPlatformToAdd: (
      state,
      action: PayloadAction<CreateAccountSocialMediaPlatformRequest>
    ) => {
      state.accountSocialMediaPlatformToAdd = action.payload;
    },
    clearAccountSocialMediaPlatformToAdd: (state) => {
      state.accountSocialMediaPlatformToAdd = null;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    }
  },
});

export const accountSocialMediaPlatformReducer =
  accountSocialMediaPlatformSlice.reducer;
export const {
  setAccountSocialMediaPlatforms,
  setAccountSocialMediaPlatformToAdd,
  clearAccountSocialMediaPlatformToAdd,
  refreshData,
} = accountSocialMediaPlatformSlice.actions;
