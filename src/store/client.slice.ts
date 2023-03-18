import { createSlice } from "@reduxjs/toolkit";
import { IClient } from "./type";
import { getClients } from "./client.actions";

interface IClientInitialState {
  total_rows: number;
  clients: IClient[];
  isFething: boolean;
  error: string;
}

const initialState: IClientInitialState = {
  total_rows: 0,
  clients: [],
  isFething: false,
  error: "",
};

const clientSlice = createSlice({
  name: "clients/slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClients.pending, (state) => {
        state.isFething = true;
      })
      .addCase(getClients.fulfilled, (state, action) => {
        state.clients = action.payload?.results!;
        state.isFething = false;
      })
      .addCase(getClients.rejected, (state, action) => {
        state.error = "Unexpected Error";
        state.isFething = false;
      });
  },
});
export const actions = clientSlice.actions;

export default clientSlice.reducer;
