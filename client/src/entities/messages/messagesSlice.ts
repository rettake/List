import { RootState } from "../../app/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMessage } from "../../interfaces/IMessage";
import { IMessageInitalState } from "../../interfaces/IMessageInitialState";

const initialState: IMessageInitalState = {
  messages: null,
};

const slice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<IMessage[]>) => {
      state.messages = action.payload;
    },
  },
  extraReducers: {},
});

export default slice.reducer;

export const selectMessages = (state: RootState) => state.messages;