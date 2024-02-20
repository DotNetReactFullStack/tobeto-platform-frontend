import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateAccountSocialMediaPlatformRequest } from "../../models/accountSocialMediaPlatforms/createAccountSocialMediaPlatformRequest";
import accountSocialMediaPlatformService from "../../services/accountSocialMediaPlatformService";
import { GetListByAccountIdAccountSocialMediaPlatformListItemDto } from "../../models/accountSocialMediaPlatforms/getListByAccountIdAccountSocialMediaPlatformListItemDto";

interface AccountSocialMediaPlatformState {
  accountSocialMediaPlatforms: GetListByAccountIdAccountSocialMediaPlatformListItemDto[];
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

    setAccountSocialMediaPlatforms: (
      state,
      action: PayloadAction<
        GetListByAccountIdAccountSocialMediaPlatformListItemDto[]
      >
    ) => {
      state.accountSocialMediaPlatforms = action.payload;
    },
  },
});

export const accountSocialMediaPlatformReducer =
  accountSocialMediaPlatformSlice.reducer;
export const {
  setSocialMediaPlatformToAccount,
  setAccountSocialMediaPlatforms,
} = accountSocialMediaPlatformSlice.actions;
