import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function Theme() {
  return (
    <div className="theme">
      <DarkModeOutlinedIcon fontSize="large" className="moon" />
      <span className="theme__text">Dark Mode</span>
    </div>
  );
}

export default Theme;
