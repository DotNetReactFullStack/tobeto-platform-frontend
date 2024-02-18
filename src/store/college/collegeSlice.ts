import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListCollegeListItemDto } from "../../models/colleges/getListCollegeListItemDto";

interface CollegeState {
  colleges: GetListCollegeListItemDto[];
  loading: boolean;
  error: string | null;
}

const initialState: CollegeState = {
  colleges: [],
  loading: false,
  error: null,
};

const collegesSlice = createSlice({
  name: "college",
  initialState,
  reducers: {
    setColleges: (
      state,
      action: PayloadAction<GetListCollegeListItemDto[]>
    ) => {
      state.colleges = action.payload;
    },
  },
});

export const collegeReducer = collegesSlice.reducer;
export const { setColleges } = collegesSlice.actions;
