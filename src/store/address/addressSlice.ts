import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateAddressRequest } from "../../models/address/createAddressRequest";


interface AddressState {
    addressToAdd: CreateAddressRequest | null;
    loading: boolean;
    error: string | null;
}

const initialState: AddressState = {
    addressToAdd: null,
    loading: false,
    error: null,
};

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setAddressToAdd: (state, action: PayloadAction<CreateAddressRequest>) => {
            state.addressToAdd = action.payload;
        },
        clearAddressToAdd: (state) => {
            state.addressToAdd = null;
        },
    },
});

export const addressReducer = addressSlice.reducer;
export const { setAddressToAdd, clearAddressToAdd } = addressSlice.actions;
