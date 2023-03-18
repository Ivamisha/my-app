import { FC } from "react";
import TableRow from "../UI/TableRow/TableRow";
import { ITableProps } from "./interface";
import "./style.scss";

const tableHeadData = [
  {
    id: 1,
    headTitle: "Тип",
  },
  {
    id: 2,
    headTitle: "Время",
  },
  {
    id: 3,
    headTitle: "Сотрудник",
  },
  {
    id: 4,
    headTitle: "",
  },
  {
    id: 5,
    headTitle: "Звонок",
  },
  {
    id: 6,
    headTitle: "Источник",
  },
  {
    id: 7,
    headTitle: "Оценка",
  },
  {
    id: 8,
    headTitle: "Длительность",
  },
];

const Table: FC<ITableProps> = ({ data }) => {
  return (
    <div className="table-wrapper">
      <table className="client-table">
        <colgroup>
          <col width="5%" />
          <col width="6%" />
          <col width="8%" />
          <col width="3%" />
          <col width="18%" />
          <col width="16%" />
          <col width="14%" />
          <col />
        </colgroup>
        <thead>
          <tr>
            {tableHeadData.map((headItem) => (
              <th className="client-table__head-cell" scope="col">
                {headItem.headTitle}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <TableRow key={row.id} data={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
