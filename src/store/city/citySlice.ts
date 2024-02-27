import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByCountryIdCityListItemDto } from "../../models/city/getListByCountryIdCityListItemDto";

interface CityState {
  cities: GetListByCountryIdCityListItemDto[];
  cityList: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CityState = {
  cities: [],
  cityList: [],
  loading: false,
  error: null,
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCities: (
      state,
      action: PayloadAction<GetListByCountryIdCityListItemDto[]>
    ) => {
      state.cities = action.payload;
    },
    setCityList: (state, action: PayloadAction<any[]>) => {
      state.cityList = action.payload;
    },
  },
});

export const cityReducer = citySlice.reducer;
export const { setCities, setCityList } = citySlice.actions;
