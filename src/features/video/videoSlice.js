import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo, putLike, putUnlike } from "./videoAPI";

const initialState = {
  video:{},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});
export const likeVideo = createAsyncThunk("video/likeVideo", async ({data,id}) => {
  const video = await putLike(data,id);
  return video;
});
export const unLikeVideo = createAsyncThunk("video/unLikeVideo", async ({data,id}) => {
  const video = await putUnlike(data,id);
  return video;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.error = "";
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading=false
        state.isError = true;
        state.video = {};
        state.error = action.error?.message;
      })
     
      .addCase(likeVideo.pending, (state) => {
        state.isError = false;
        state.error = "";
      })
      .addCase(likeVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video.likes=action.payload.likes

      })
      .addCase(likeVideo.rejected, (state, action) => {
        state.isLoading=false
      })
      .addCase(unLikeVideo.pending, (state) => {
        state.isError = false;
        state.error = "";
      })
      .addCase(unLikeVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video.unlikes=action.payload.unlikes

      })
      .addCase(unLikeVideo.rejected, (state, action) => {
        state.isLoading=false
      });
  },
});

export default videoSlice.reducer;
