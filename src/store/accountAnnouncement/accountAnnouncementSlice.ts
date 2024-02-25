import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByAccountIdAccountAnnouncementListItemDto } from "../../models/accountAnnouncement/getListByAccountIdAccountAnnouncementListItemDto";

interface AccountAnnouncementState {
    accountAnnouncements: GetListByAccountIdAccountAnnouncementListItemDto[];
    loading: boolean;
    error: string | null;
}

const initialState: AccountAnnouncementState = {
    accountAnnouncements: [],
    loading: false,
    error: null,
};

const accountAnnouncementSlice = createSlice({
    name: "accountAnnouncement",
    initialState,
    reducers: {
        setAccountAnnouncements: (
            state,
            action: PayloadAction<GetListByAccountIdAccountAnnouncementListItemDto[]>
        ) => {
            state.accountAnnouncements = action.payload;
        },
    },
});

export const accountAnnouncementReducer = accountAnnouncementSlice.reducer;
export const { setAccountAnnouncements } = accountAnnouncementSlice.actions;
