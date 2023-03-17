import { FC } from "react";
import { ReactComponent as Decline } from "src/assets/svg/decline.svg";
import { ReactComponent as SearchIcon } from "src/assets/svg/search.svg";
import { ISearchBar } from "./interface";
import "./style.scss";

const SearchBar: FC<ISearchBar> = (props) => {
  return (
    <div className="searchBar">
      <SearchIcon className="searchBar__icon_search" />

      <button className="searchBar__button">
        <Decline />
      </button>

      <input {...props} type="text" className="searchBar__search" />
    </div>
  );
};
export default SearchBar;
