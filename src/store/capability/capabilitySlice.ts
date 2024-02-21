import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListCapabilityListItemDto } from "../../models/capability/getListCapabilityListItemDto";

interface CapabilityState {
    capabilities: GetListCapabilityListItemDto[];
    loading: boolean;
    error: string | null;
    refreshData: boolean;
}

const initialState: CapabilityState = {
    capabilities: [],
    loading: false,
    error: null,
    refreshData: false,
};

const capabilitySlice = createSlice({
    name: "capability",
    initialState,
    reducers: {
        setCapabilities: (state, action: PayloadAction<GetListCapabilityListItemDto[]>) => {
            state.capabilities = action.payload;
        },
        refreshData: (state) => {
            state.refreshData = !state.refreshData;
        },
    },
});

export const capabilityReducer = capabilitySlice.reducer;
export const { setCapabilities, refreshData } = capabilitySlice.actions;
