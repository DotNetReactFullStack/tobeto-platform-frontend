import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListCapabilityListItemDto } from "../../models/capability/getListCapabilityListItemDto";

interface CapabilityState {
    capabilities: GetListCapabilityListItemDto[];
    loading: boolean;
    error: string | null;
}

const initialState: CapabilityState = {
    capabilities: [],
    loading: false,
    error: null,
};

const capabilitySlice = createSlice({
    name: "capability",
    initialState,
    reducers: {
        setCapabilities: (state, action: PayloadAction<GetListCapabilityListItemDto[]>) => {
            state.capabilities = action.payload;
        },
    },
});

export const capabilityReducer = capabilitySlice.reducer;
export const { setCapabilities } = capabilitySlice.actions;
