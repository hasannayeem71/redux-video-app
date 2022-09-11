import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFilter } from "../../features/filter/filterSlice";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);
  const { tags:selectedTag, search:searchText,author } = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags?.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
        {(selectedTag?.length>0 || searchText||author) && (
          <div
            className={`bg-red-600 text-white px-4 py-1 rounded-full cursor-pointer`}
            onClick={()=>dispatch(removeFilter())}
          >
            Clear filter
          </div>
        )}
      </div>
    </section>
  ) : null;
};

export default Tags;
