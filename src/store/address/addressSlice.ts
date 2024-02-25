import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UpdateAddressRequest } from "../../models/address/updateAddressRequest";


interface AddressState {
    addresToUpdate: UpdateAddressRequest | null;
    loading: boolean;
    error: string | null;
}

const initialState: AddressState = {
    addresToUpdate: null,
    loading: false,
    error: null,
};

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setAddressToUpdate: (state, action: PayloadAction<UpdateAddressRequest>) => {
            state.addresToUpdate = action.payload;
        },
        clearAddressToUpdate: (state) => {
            state.addresToUpdate = null;
        },
    },
});

export const addressReducer = addressSlice.reducer;
export const { setAddressToUpdate, clearAddressToUpdate } = addressSlice.actions;
