import React, { useState } from "react";
import { useGlobalContext } from "./context/Context";

const Search = () => {
  const { searchTerm, setSearchterm } = useGlobalContext();
  const handleClick = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchterm(searchValue);
    console.log(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form method="post" onSubmit={handleClick} className="search-form">
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button className="btn">submit</button>
      </form>
    </section>
  );
};

export default Search;
