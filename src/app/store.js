import { configureStore } from "@reduxjs/toolkit";
import FilterReducer from "../features/filter/filterSlice";
import PaginationReducer from "../features/pagination/paginationSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice";
import TagsReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import VideosReducer from "../features/videos/VideosSlice";

export const store = configureStore({
  reducer: {
    videos: VideosReducer,
    video: videoReducer,
    tags: TagsReducer,
    relatedVideo: relatedVideosReducer,
    filter: FilterReducer,
    pagination:PaginationReducer
  },
});
