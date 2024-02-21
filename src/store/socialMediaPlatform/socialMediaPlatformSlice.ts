import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListSocialMediaPlatformListItemDto } from "../../models/socialMediaPlatforms/getListSocialMediaPlatformListItemDto";

interface SocialMediaPlatformState {
  socialMediaPlatforms: GetListSocialMediaPlatformListItemDto[];
  loading: boolean;
  error: string | null;
}

const initialState: SocialMediaPlatformState = {
  socialMediaPlatforms: [],
  loading: false,
  error: null,
};

const socialMediaPlatformSlice = createSlice({
  name: "socialMediaPlatform",
  initialState,
  reducers: {
    setSocialMediaPlatforms: (
      state,
      action: PayloadAction<GetListSocialMediaPlatformListItemDto[]>
    ) => {
      state.socialMediaPlatforms = action.payload;
    },
  },
});

export const socialMediaPlatformReducer = socialMediaPlatformSlice.reducer;
export const { setSocialMediaPlatforms } = socialMediaPlatformSlice.actions;
