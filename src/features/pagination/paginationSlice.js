import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page:1
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
   pageSelected: (state, action) => {
      state.page=action.payload
    }
  },
});

export default paginationSlice.reducer;
export const { pageSelected} = paginationSlice.actions;
