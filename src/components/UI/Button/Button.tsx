import { FC } from "react";
import { IButtonProps } from "./interface";
import "./style.scss";

export const Button: FC<IButtonProps> = (props) => {
  const { icon, children } = props;
  return (
    <button className="button-ui" {...props}>
      <>
        {children} {icon}
      </>
    </button>
  );
};