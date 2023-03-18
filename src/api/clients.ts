import { AxiosResponse } from "axios";
import { IGetClientsResponse } from "src/store/interface";
import api from "./api";

export const getClientsFromDB = async (): Promise<
  AxiosResponse<IGetClientsResponse>
> => {
  const res = await api.post("/getList");
  return res;
};
