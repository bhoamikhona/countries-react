import React from "react";
import "./FilterBar.css";
import Search from "../../Partials/Search/Search.jsx";
import Dropdown from "../../Partials/Dropdown/Dropdown.jsx";

function FilterBar() {
  return (
    <div className="filter-bar">
      <div className="filter-bar__left">
        <Search />
      </div>
      <div className="filter-bar__right">
        <Dropdown />
      </div>
    </div>
  );
}

export default FilterBar;
