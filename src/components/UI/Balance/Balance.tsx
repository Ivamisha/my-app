import { FC } from "react";
import { IBalance } from "./interface";
import { ReactComponent as Plus } from "src/assets/svg/plus.svg";
import "./style.scss";

const Balance: FC<IBalance> = ({ cost }) => {
  return (
    <div className="balance">
      <div className="balance__text">
        <span>Баланс</span>

        <span>{cost}₽</span>
      </div>
      <Plus className="balance__icon" />
    </div>
  );
};
export default Balance;
