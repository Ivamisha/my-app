import { FC } from "react";

import { SvgIcon } from "../";

import { ISearchBarProps } from "./interface";

import "./style.scss";

export const SearchBar: FC<ISearchBarProps> = (props) => {
  return (
    <div className="searchBar">
      <SvgIcon nameSvg="SearchIcon" className="searchBar__icon_search" />
      <button className="searchBar__button">
        <SvgIcon nameSvg="Decline"/>
      </button>

      <input {...props} type="text" className="searchBar__search" />
    </div>
  );
};