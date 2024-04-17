import React, { useState } from "react";
import "./Dropdown.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function Dropdown({ onFilter }) {
  const [continent, setContinent] = useState("");
  const [open, setOpen] = useState(false);

  const continents = {
    africa: "Africa",
    america: "Americas",
    asia: "Asia",
    europe: "Europe",
    oceania: "Oceania",
  };

  const handleSelected = function (e) {
    console.log(e.target.value);

    const selectedContinent = continents[e.target.value];
    setContinent(selectedContinent);
    onFilter(selectedContinent);
    setOpen(false);
  };

  const handleOpen = function () {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__btn" onClick={handleOpen}>
        <div className="dropdown__text">
          <span className="dropdown__selected-text">
            {continent ? continent : "Filter by Region"}
          </span>
          <KeyboardArrowDownOutlinedIcon className="down-arrow" />
        </div>
      </button>

      {open && (
        <ul className="menu">
          {Object.entries(continents).map(([key, value]) => (
            <li key={key} className="menu__item">
              <button
                className="menu__btn"
                value={key}
                onClick={handleSelected}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
