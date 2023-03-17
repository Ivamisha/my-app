import { FC } from "react";
import Drawer from "../Drawer/Drawer";
import Header from "../Header/Header";

import { IWrapper } from "./interface";
import "./style.scss";

const Wrapper: FC<IWrapper> = ({ children }) => {
  return (
    <div className="wrapper">
      <Drawer />
      <div className="wrapper__container">
        <Header />
        {children}
      </div>
    </div>
  );
};
export default Wrapper;
