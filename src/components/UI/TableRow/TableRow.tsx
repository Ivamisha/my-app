import { FC } from "react";
import { ITableRowProps } from "./interface";
import "./style.scss";

const TableRow: FC<ITableRowProps> = ({ data }) => {
  return (
    <tr className="table-row">
      <td className="table-row-td">1</td>
      <td className="table-row-td">1</td>
      <td className="table-row-td">
        <img src={data.person_avatar} alt="image" />
      </td>
      <td className="table-row-td">1</td>
      <td className="table-row-td">1</td>
      <td className="table-row-td">1</td>
      <td className="table-row-td">1</td>
      <td className="table-row-td">{data.time}</td>
    </tr>
  );
};
export default TableRow;
