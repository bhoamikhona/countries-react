import React from "react";
import "./FilterBar.css";
import Search from "../../Partials/Search/Search.jsx";
import Dropdown from "../../Partials/Dropdown/Dropdown.jsx";

function FilterBar({ onSearch, onFilter }) {
  return (
    <div className="filter-bar">
      <div className="filter__wrapper">
        <div className="filter-bar__left">
          <Search onSearch={onSearch} />
        </div>
        <div className="filter-bar__right">
          <Dropdown onFilter={onFilter} />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
