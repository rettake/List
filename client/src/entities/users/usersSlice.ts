import { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../../app/api/posts";
import { IUserInitalState } from "../../interfaces/IPostInitalState";

const initialState: IUserInitalState = {
  users: null,
};

const slice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.getAllUsers.matchFulfilled,
      (state, action) => {
        state.users = action.payload;
      }
    );
  },
});

export default slice.reducer;

export const selectPosts = (state: RootState) => state.users;
