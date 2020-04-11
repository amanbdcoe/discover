import React, { useEffect } from "react";
import "./Popular.scss";
import Header from "../../shared/Header/Header";
import { StoreProps } from "../App/App";
import { inject, observer } from "mobx-react";

interface Props extends StoreProps {

}

const Popular: React.FC<Props> = (props: Props) => {

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

export default inject('store')(observer(Popular));

