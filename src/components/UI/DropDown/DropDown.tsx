import { FC, useState } from "react";
import DropDownOption from "../DropDownOption/DropDownOption";
import { SvgIcon } from "../SvgIcon";
import { IDropDown } from "./inteface";
import "./style.scss";

const DropDown: FC<IDropDown> = ({ handleClick, open, setOpen, data }) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <div className="drop-down">
      <button
        className={"drop-down-action" + (state ? " open" : "")}
        onClick={() => setState((prev) => !prev)}
      >
        pick me
        <SvgIcon
          nameSvg="ArrowDown"
          className={"drop-down__icon" + (state ? " open" : "")}
        />
      </button>

      {state && (
        <div className="drop-down__option-wrapper">
          <DropDownOption />
          {data.map((item, index) => (
            <DropDownOption key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
export default DropDown;
