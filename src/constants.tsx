import { IMenuItemProps } from "./components/UI/MenuItem/inteface";
import { SvgIcon } from "./components/UI/SvgIcon/SvgIcon";

export const menuItemArray: IMenuItemProps[] = [
  {
    id: 1,
    icon: <SvgIcon nameSvg="Vector" />,
    text: "Итоги",
  },
  {
    id: 2,
    icon: <SvgIcon nameSvg="Orders" />,
    text: "Заказы",
  },
  {
    id: 3,
    icon: <SvgIcon nameSvg="Mail" />,
    text: "Сообщения",
  },
  {
    id: 4,
    icon: <SvgIcon nameSvg="Calls" />,
    text: "Звонки",
  },
  {
    id: 5,
    icon: <SvgIcon nameSvg="People" />,
    text: "Контрагенты",
  },
  {
    id: 6,
    icon: <SvgIcon nameSvg="Documents" />,
    text: "Документы",
  },
  {
    id: 7,
    icon: <SvgIcon nameSvg="Human" />,
    text: "Исполнители",
  },
  {
    id: 8,
    icon: <SvgIcon nameSvg="Human" />,
    text: "Отчеты",
  },
  {
    id: 9,
    icon: <SvgIcon nameSvg="Library" />,
    text: "База знаний",
  },
  {
    id: 10,
    icon: <SvgIcon nameSvg="Settings" />,
    text: "Настройки",
  },
];
