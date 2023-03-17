import { FC } from "react";

export interface IMenuItem {
  id?: number;
  text: string;
  icon: FC<React.SVGProps<SVGSVGElement>> | React.ReactNode;
}
