import { IMenuItem } from "./components/UI/MenuItem/inteface";
import { ReactComponent as Settings } from "./assets/svg/settings.svg";
import { ReactComponent as Calls } from "./assets/svg/calls.svg";
import { ReactComponent as Briefcase } from "./assets/svg/briefcase.svg";
import { ReactComponent as Documents } from "./assets/svg/documents.svg";
import { ReactComponent as Human } from "./assets/svg/human.svg";
import { ReactComponent as Library } from "./assets/svg/library.svg";
import { ReactComponent as Mail } from "./assets/svg/mail.svg";
import { ReactComponent as Orders } from "./assets/svg/orders.svg";
import { ReactComponent as People } from "./assets/svg/people.svg";
import { ReactComponent as Vector } from "./assets/svg/vector.svg";

export const menuItemArray: IMenuItem[] = [
  {
    id: 1,
    icon: <Vector />,
    text: "Итоги",
  },
  {
    id: 2,
    icon: <Orders />,
    text: "Заказы",
  },
  {
    id: 3,
    icon: <Mail />,
    text: "Сообщения",
  },
  {
    id: 4,
    icon: <Calls />,
    text: "Звонки",
  },
  {
    id: 5,
    icon: <People />,
    text: "Контрагенты",
  },
  {
    id: 6,
    icon: <Documents />,
    text: "Документы",
  },
  {
    id: 7,
    icon: <Human />,
    text: "Исполнители",
  },
  {
    id: 8,
    icon: <Briefcase />,
    text: "Отчеты",
  },
  {
    id: 9,
    icon: <Library />,
    text: "База знаний",
  },
  {
    id: 10,
    icon: <Settings />,
    text: "Настройки",
  },
];
