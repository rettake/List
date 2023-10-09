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
      if (
        JSON.stringify(state.messages[state.messages.length - 1]) !==
        JSON.stringify(action.payload)
      ) { // Сравниваем объекты, чтобы определить, является сообщение дубликатом или нет
        state.messages?.length > 8
          ? state.messages = [...state.messages.slice(-8), action.payload] // Отображение последних восьми сообщений 
          : state.messages?.push(action.payload);
      }
    },
  },
  extraReducers: {},
});

export default slice.reducer;

export const { setMessages } = slice.actions;

export const selectMessages = (state: RootState) => state.messages;
