import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateAccountSocialMediaPlatformRequest } from "../../models/accountSocialMediaPlatforms/createAccountSocialMediaPlatformRequest";
import accountSocialMediaPlatformService from "../../services/accountSocialMediaPlatformService";

interface AccountSocialMediaPlatformState {
  accountSocialMediaPlatforms: any[];
  loading: boolean;
  error: string | null;
}

const initialState: AccountSocialMediaPlatformState = {
  accountSocialMediaPlatforms: [],
  loading: false,
  error: null,
};

const accountSocialMediaPlatformSlice = createSlice({
  name: "accountSocialMediaPlatform",
  initialState,
  reducers: {
    setSocialMediaPlatformToAccount: (
      state,
      action: PayloadAction<CreateAccountSocialMediaPlatformRequest>
    ) => {
      accountSocialMediaPlatformService.add(action.payload);
    },
  },
});

export const accountSocialMediaPlatformReducer =
  accountSocialMediaPlatformSlice.reducer;
export const { setSocialMediaPlatformToAccount } =
  accountSocialMediaPlatformSlice.actions;
