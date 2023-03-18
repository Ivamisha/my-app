import { FC } from "react";
import { IMenuItemProps } from "./inteface";
import "./style.scss";

export const MenuItem: FC<IMenuItemProps> = ({ icon, text }) => {
  return (
    <div className="menu-item">
      {icon}
      <span className="menu-item__text">{text}</span>
    </div>
  );
};
