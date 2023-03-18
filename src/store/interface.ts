import { IClient } from "./type";

export interface IGetClientsResponse {
  total_rows: number;
  results: IClient[];
}
