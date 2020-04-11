import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="brand-name">
        Discover
      </div>
      <div className="nav-links">
        <NavLink to="/popular" className="nav-item">
          Popular
        </NavLink>
        <NavLink to="/trending" className="nav-item">
          Trend
        </NavLink>
      </div>
      <div className="search-container">
      </div>
    </div>
  )
};

export default Header
