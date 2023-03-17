import { FC } from "react";
import { IButton } from "./interface";
import "./style.scss";

const Button: FC<IButton> = (props) => {
  const { icon, children } = props;
  return (
    <button className="button-ui" {...props}>
      <>
        {children} {icon}
      </>
    </button>
  );
};
export default Button;
