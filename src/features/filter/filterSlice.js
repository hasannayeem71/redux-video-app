import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    removeFilter: (state, action) => {
      state.search = "";
      state.tags = [];
    },
  },
});

export default filterSlice.reducer;
export const { tagRemoved, tagSelected, searched,removeFilter } = filterSlice.actions;
