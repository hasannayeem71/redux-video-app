import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../features/filter/filterSlice";
import { pageSelected } from "../../features/pagination/paginationSlice";

const Search = () => {
  const { search } = useSelector((state) => state.filter);
  
  const [input, setinput] = useState('');
  const dispatch = useDispatch();
  const match = useMatch("/");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
    dispatch(pageSelected(1))
    // if user not in home page redirect to home page
    if (!match) {
      navigate("/");
    }
  };

  useEffect(()=>{
    setinput(search)
  },[search])

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
    </form>
  );
};

export default Search;
