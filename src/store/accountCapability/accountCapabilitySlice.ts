import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByAccountIdAccountCapabilityListItemDto } from "../../models/accountCapability/getListByAccountIdAccountCapabilityListItemDto";
import accountCapabilityService from "../../services/accountCapabilityService";
import { CreateAccountCapabilityRequest } from "../../models/accountCapability/createAccountCapabilityRequest";

interface AccountCapabilityState {
    accountCapabilities: GetListByAccountIdAccountCapabilityListItemDto[];
    loading: boolean;
    error: string | null;
}

const initialState: AccountCapabilityState = {
    accountCapabilities: [],
    loading: false,
    error: null,
};

const accountCapabilitySlice = createSlice({
    name: "accountCapability",
    initialState,
    reducers: {
        setAccountCapabilities: (state, action: PayloadAction<GetListByAccountIdAccountCapabilityListItemDto[]>) => {
            state.accountCapabilities = action.payload;
        },
        setCapabilityToAccount: (state, action: PayloadAction<CreateAccountCapabilityRequest>) => {
            accountCapabilityService.add(action.payload)
        }
    },
});

export const accountCapabilityReducer = accountCapabilitySlice.reducer;
export const { setAccountCapabilities, setCapabilityToAccount } = accountCapabilitySlice.actions;
