import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
  author: "",
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
    authorSelected: (state, action) => {
      state.author = action.payload;
      state.tags=[];
      state.search=""
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    removeFilter: (state, action) => {
      state.search = "";
      state.tags = [];
      state.author=''
    },
  },
});

export default filterSlice.reducer;
export const { tagRemoved, tagSelected,authorSelected, searched, removeFilter } =
  filterSlice.actions;
