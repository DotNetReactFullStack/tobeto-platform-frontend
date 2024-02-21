import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListByCityIdDistrictListItemDto } from "../../models/district/getListByCityIdDistrictListItemDto";

interface DistrictState {
    districts: GetListByCityIdDistrictListItemDto[];
    loading: boolean;
    error: string | null;
}

const initialState: DistrictState = {
    districts: [],
    loading: false,
    error: null,
};

const districtSlice = createSlice({
    name: "district",
    initialState,
    reducers: {
        setDistricts: (state, action: PayloadAction<GetListByCityIdDistrictListItemDto[]>) => {
            state.districts = action.payload;
        },
    },
});

export const districtReducer = districtSlice.reducer;
export const { setDistricts } = districtSlice.actions;