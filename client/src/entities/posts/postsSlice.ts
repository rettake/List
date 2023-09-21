import { RootState } from './../../app/store';
import { createSlice } from "@reduxjs/toolkit";
import { postsApi } from "../../app/api/posts";
import { IPostInitalState } from '../../interfaces/IPostInitalState';

const initialState: IPostInitalState = {
  posts: null,
};

const slice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getAllPosts.matchFulfilled,
      (state, action) => {
        state.posts = action.payload;
      }
    );
  },
});

export default slice.reducer;

export const selectPosts = (state: RootState) => state.posts
