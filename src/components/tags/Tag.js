import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";
import { pageSelected } from "../../features/pagination/paginationSlice";

const Tag = ({ tag }) => {
  const dispatch = useDispatch()
  const {tags}= useSelector(state=>state.filter)
  const isSelected= tags.includes(tag.title)?true:false

  const handleSelect=()=>{
    if(isSelected){
      dispatch(tagRemoved(tag.title))
    }
    else{
      dispatch(tagSelected(tag.title))
      dispatch(pageSelected(1))
    }
  }


  return (
    <div className={`${isSelected?"bg-blue-600 text-white":"bg-blue-100 text-blue-600"} px-4 py-1 rounded-full cursor-pointer`} onClick={handleSelect} >
      {tag.title}
    </div>
  );
};

export default Tag;

