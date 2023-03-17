import { FC } from "react";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import SearchBar from "../UI/SearchBar/SearchBar";

import "./style.scss";

const Header: FC = () => {
  return (
    <div className="header">
      <ProgressBar
        text="Новые звонки"
        colorText="20 из 30 шт"
        count={25}
        linearColor="green"
      />

      <ProgressBar
        text="Новые звонки"
        colorText="20 из 30 шт"
        count={25}
        linearColor="red"
      />

      <ProgressBar
        text="Новые звонки"
        colorText="20 из 30 шт"
        count={25}
        linearColor="red"
      />
      <SearchBar placeholder="ИП Сидорова Александра Михайловна" />
    </div>
  );
};
export default Header;
