import { RootState } from "../../app/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMessage } from "../../interfaces/IMessage";
import { IMessageInitalState } from "../../interfaces/IMessageInitialState";

const initialState: IMessageInitalState = {
  messages: [],
};

const slice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<IMessage>) => {
      state.messages?.length > 8
        ? state.messages?.slice(-5).push(action.payload)
        : state.messages?.push(action.payload);
    },
  },
  extraReducers: {},
});

export default slice.reducer;

export const { setMessages } = slice.actions;

export const selectMessages = (state: RootState) => state.messages;
