import { FC } from "react";
import { IMenuItem } from "./inteface";
import "./style.scss";

const MenuItem: FC<IMenuItem> = ({ icon, text }) => {
  return (
    <div className="menu-item">
      <>{icon}</>
      <span className="menu-item__text">{text}</span>
    </div>
  );
};
export default MenuItem;
