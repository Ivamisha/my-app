import { FC } from "react";
import { IDatePicker } from "./inteface";
import { ReactComponent as ArrowRigth } from "src/assets/svg/arrowRigth.svg";
import { ReactComponent as ArrowLeft } from "src/assets/svg/arrowLeft.svg";
import { ReactComponent as Calendar } from "src/assets/svg/calendar.svg";
import "./style.scss";

const DatePicker: FC<IDatePicker> = ({ text, handleClick = () => null }) => {
  return (
    <div className="data-picker">
      <ArrowLeft className="data-picker__icon" onClick={handleClick} />

      <div className="data-picker__information-wrapper">
        <Calendar className="data-picker__icon-calendar" />

        <span className="data-picker__information-text">{text}</span>
      </div>

      <ArrowRigth className="data-picker__icon" onClick={handleClick} />
    </div>
  );
};
export default DatePicker;
