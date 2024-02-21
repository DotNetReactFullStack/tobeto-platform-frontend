import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListCountryListItemDto } from "../../models/country/getListCountryListItemDto";

interface CountryState {
    countries: GetListCountryListItemDto[];
    loading: boolean;
    error: string | null;
}

const initialState: CountryState = {
    countries: [],
    loading: false,
    error: null,
};

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        setCountries: (state, action: PayloadAction<GetListCountryListItemDto[]>) => {
            state.countries = action.payload;
        },
    },
});

export const countryReducer = countrySlice.reducer;
export const { setCountries } = countrySlice.actions;