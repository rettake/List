import { IPost } from "../../interfaces/IPost";
import { api } from "./api";

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<IPost[], string>({
      query: (page) => ({
        url: `/posts?_limit=10&_page=${page}`,
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
