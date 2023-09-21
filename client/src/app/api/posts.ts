import { IPost } from "../../interfaces/IPost";
import { api } from "./api";

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<IPost[], void>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query<IPost, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;

export const {
  endpoints: { getAllPosts, getPostById },
} = postsApi;
