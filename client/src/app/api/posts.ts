import { IPost } from "../../interfaces/IPost";
import { api } from "./api";

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<IPost[], number>({
      query: (page) => ({
        url: `/posts?_limit=3&_page=${page}`,
        method: "GET",
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }
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
