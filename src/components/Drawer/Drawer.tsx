import { FC } from "react";

import { menuItemArray } from "src/constants";
import logo from "src/assets/png/logo.png";

import { Button, MenuItem } from "../UI";

import "./style.scss";

const Drawer: FC = () => {
  return (
    <div className="drawer">
      <img src={logo} alt="logo" />

      {menuItemArray.map((item) => (
        <MenuItem key={item.id} icon={item.icon} text={item.text} />
      ))}

      <Button>Добавить заказ</Button>

      <Button>Оплата</Button>
    </div>
  );
};
export default Drawer;
