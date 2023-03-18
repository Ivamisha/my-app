import { ButtonHTMLAttributes, FC } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: FC<React.SVGProps<SVGSVGElement>> | React.ReactNode;
}
