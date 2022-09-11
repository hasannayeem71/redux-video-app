import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";
import RelatedVideoListItem from "./RelatedVideoListItem";

const RelatedVideoList = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { isLoading, relatedVideos } = useSelector(
    (state) => state.relatedVideo
  );
  useEffect(() => {
    dispatch(fetchRelatedVideo({ id:currentVideoId, tags }));
  }, [dispatch, currentVideoId, tags]);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && relatedVideos?.length > 0)
    content = relatedVideos?.map((video) => (
      <RelatedVideoListItem key={video.id} video={video} />
    ));

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
