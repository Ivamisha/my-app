import { FC, useState } from "react";
import DropDownOption from "../DropDownOption/DropDownOption";
import { IDropDown } from "./inteface";

const DropDown: FC<IDropDown> = ({ handleClick, open, setOpen, data }) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setState((prev) => !prev)}>pick me</button>

      {state && data.map((item, index) => <DropDownOption key={index} />)}
    </div>
  );
};
export default DropDown;
