import { IUser } from "./../../interfaces/IUser";
import { api } from "./api";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUser[], void>({
      query: () => ({
        url: "/post",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getUserById: builder.query<IUser, string>({
      query: (id) => ({
        url: `/post/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    deleteUserById: builder.mutation<null, number>({
      query: (id) => ({
        url: `/post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    addUser: builder.mutation<IUser, Omit<IUser, "_id">>({
      query: (payload) => ({
        url: "/post",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useDeleteUserByIdMutation,
  useAddUserMutation,
} = usersApi;

export const {
  endpoints: { getAllUsers, getUserById, deleteUserById, addUser },
} = usersApi;
