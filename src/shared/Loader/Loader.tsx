import { Spin } from "antd";
import React from "react";
import "./Loader.scss"

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <Spin size="large"/>
    </div>
  )
};

export default Loader;
