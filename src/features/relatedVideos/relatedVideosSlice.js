import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosAPI";

const initialState = {
  relatedVideos:[],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedVideo = createAsyncThunk("relatedVideo/fetchRelatedVideo", async ({tags,id}) => {
  const video = await getRelatedVideos({tags,id});
  return video;
});

const relatedVideosSlice = createSlice({
  name: "relatedVideo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideo.pending, (state) => {
        state.isError = false;
        state.error = "";
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideo.rejected, (state, action) => {
        state.isLoading=false
        state.isError = true;
        state.relatedVideos = [];
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
