import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  const handleSubmit = function (e) {
    e.preventDefault();
  };

  return (
    <form className="search__form">
      <button type="submit" className="search__btn" onClick={handleSubmit}>
        <SearchIcon className="search__icon" fontSize="large" />
      </button>
      <div className="input-control">
        <label htmlFor="search" className="search__label">
          Search:
        </label>
        <input
          type="text"
          className="search__input"
          placeholder="Search for a country…"
          autoComplete="off"
        />
      </div>
    </form>
  );
}

export default Search;
