import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetListGraduationStatusListItemDto } from "../../models/graduationStatuses/getListGraduationStatusListItemDto";

interface GraduationStatusState {
  graduationStatuses: GetListGraduationStatusListItemDto[];
  loading: boolean;
  error: string | null;
}

const initialState: GraduationStatusState = {
  graduationStatuses: [],
  loading: false,
  error: null,
};

const graduationStatusSlice = createSlice({
  name: "graduationStatus",
  initialState,
  reducers: {
    setGraduationStatuses: (
      state,
      action: PayloadAction<GetListGraduationStatusListItemDto[]>
    ) => {
      state.graduationStatuses = action.payload;
    },
  },
});

export const graduationStatusReducer = graduationStatusSlice.reducer;
export const { setGraduationStatuses } = graduationStatusSlice.actions;
