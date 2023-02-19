import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


const initialState:any= ""

export const reducerMessage = createSlice({
  name: "messages",
  initialState,
  reducers: {
    comu: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
    },
  },
});

export const { comu } = reducerMessage.actions;

export default reducerMessage.reducer;