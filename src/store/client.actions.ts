import { createAsyncThunk } from "@reduxjs/toolkit";
import { getClientsFromDB } from "src/api/clients";

export const getClients = createAsyncThunk(
  "clients/slice",
  async (_, thunkApi) => {
    try {
      const res = await getClientsFromDB();
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
