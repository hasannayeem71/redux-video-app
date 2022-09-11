import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../features/filter/filterSlice";

const Search = () => {
  const { search } = useSelector((state) => state.filter);
  const [input, setinput] = useState(search);
  const dispatch = useDispatch();
  const match = useMatch("/");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    // if user not in home page redirect to home page
    if (!match) {
      navigate("/");
    }
  };

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
