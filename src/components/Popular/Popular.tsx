import React, { useEffect } from "react";
import "./Popular.scss";
import Header from "../../shared/Header/Header";

const Popular: React.FC = () => {

  useEffect(() => {

  }, []);

  return (
    <div className="popular-container">
      <div className="main-container">
        <Header/>
      </div>
      <div className="sidebar-container">
        <h2>Filters here</h2>
      </div>
    </div>
  );
};

export default Popular;

