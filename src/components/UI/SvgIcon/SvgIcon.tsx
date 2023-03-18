import { FC, JSXElementConstructor, ReactElement } from "react";

import { ReactComponent as Settings } from "src/assets/svg/settings.svg";
import { ReactComponent as Calls } from "src/assets/svg/calls.svg";
import { ReactComponent as Briefcase } from "src/assets/svg/briefcase.svg";
import { ReactComponent as Documents } from "src/assets/svg/documents.svg";
import { ReactComponent as Human } from "src/assets/svg/human.svg";
import { ReactComponent as Library } from "src/assets/svg/library.svg";
import { ReactComponent as Mail } from "src/assets/svg/mail.svg";
import { ReactComponent as Orders } from "src/assets/svg/orders.svg";
import { ReactComponent as People } from "src/assets/svg/people.svg";
import { ReactComponent as Vector } from "src/assets/svg/vector.svg";

export const NameSvg: Record<string, ReactElement<void, JSXElementConstructor<FC<React.SVGProps<SVGSVGElement>>>>> = {
  Settings: <Settings />,
  Calls: <Calls />,
  Briefcase: <Briefcase />,
  Documents: <Documents />,
  Human: <Human />,
  Library: <Library />,
  Mail: <Mail />,
  Orders: <Orders />,
  People: <People />,
  Vector: <Vector />
}

export const enum svgNameEnum {
  Settings = 'Settings',
  Calls = 'Calls',
  Briefcase = 'Briefcase',
  Documents = 'Documents',
  Human = 'Human',
  Library = 'Library',
  Mail = 'Mail',
  Orders = 'Orders',
  People = 'People',
  Vector = 'Vector'
}

export interface IsvgIconProps {
  nameSvg: keyof typeof svgNameEnum,
}

export const SvgIcon: FC<IsvgIconProps> = (props) => {
  const { nameSvg } = props;
  
  return <>
    {NameSvg[nameSvg]}
  </>
};
