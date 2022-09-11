import React from "react";
import { useDispatch, useSelector } from "react-redux";
import likeImg from "../../assets/like.svg";
import unLikeImg from "../../assets/unlike.svg";
import { likeVideo, unLikeVideo } from "../../features/video/videoSlice";
const LikeUnlike = () => {
  const {video}= useSelector(state=>state.video)
  const dispatch=useDispatch()
  const {likes,unlikes}=video
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0" onClick={()=>dispatch(likeVideo({data:{...video,likes:likes+1},id:video.id}))}>
          <img className="w-5 block" src={likeImg} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0" onClick={()=>dispatch(unLikeVideo({data:{...video,unlikes:unlikes+1},id:video.id}))} >
          <img className="w-5 block" src={unLikeImg} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{unlikes}</div>
      </div>
    </div>
  );
};

export default LikeUnlike;
