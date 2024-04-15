import React, { useEffect, useState } from "react";
import "./Theme.css";
import { ReactComponent as MoonOutline } from "../../assets/images/moon-outline.svg";
import { ReactComponent as MoonFilled } from "../../assets/images/moon-filled.svg";

function Theme() {
  const [darkMode, setDarkMode] = useState(function () {
    const storedTheme = localStorage.getItem("theme");
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return storedTheme === "dark" || (storedTheme === null && prefersDarkMode);
  });

  useEffect(
    function () {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
      document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    },
    [darkMode]
  );

  const toggleTheme = function () {
    setDarkMode(!darkMode);
  };

  return (
    <button className="theme" onClick={toggleTheme}>
      <span className="theme__icon-container">
        {darkMode ? (
          <MoonFilled className="theme__icon" />
        ) : (
          <MoonOutline className="theme__icon" />
        )}
      </span>
      <span className="theme__text">Dark Mode</span>
    </button>
  );
}

export default Theme;
