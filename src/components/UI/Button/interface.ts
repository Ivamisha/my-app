import { ButtonHTMLAttributes, FC } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: FC<React.SVGProps<SVGSVGElement>> | React.ReactNode;
}
