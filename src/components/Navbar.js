import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";

const Navbar = () => {
  // eslint-disable-next-line
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="switch">
        <label>
          <input type="checkbox" onClick={toggleTheme}
          checked={theme==='dark'}/>
          <span className="slider"></span>
        </label>
        
      </div>
    </div>
  );
};

export default Navbar;
