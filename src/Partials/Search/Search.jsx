import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

function Search({ onSearch }) {
  const handleChange = function (e) {
    onSearch(e.target.value);
  };

  return (
    <div className="search__form">
      <SearchIcon className="search__icon" fontSize="large" />
      <div className="input-control">
        <label htmlFor="search" className="search__label">
          Search:
        </label>
        <input
          type="text"
          className="search__input"
          placeholder="Search for a country…"
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Search;
