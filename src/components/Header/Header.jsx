import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Theme from "../Theme/Theme.jsx";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="logo">
          Where in the world?
        </Link>
      </div>
      <div className="header__right">
        <Theme />
      </div>
    </header>
  );
}

export default Header;
