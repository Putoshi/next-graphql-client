import { createApi } from "@reduxjs/toolkit/query/react";
import { gql } from "graphql-request";
import { graphqlUserQuery } from './UserQuery';

import { headers } from "next/headers";
const getMyQuery = gql`
  query MyQuery {
    all {
      items {
        itemsId
        name
      }
    }
  }
`;


export const userDataApi = createApi({
  reducerPath: "userReducer",
  baseQuery: graphqlUserQuery(),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        document: getMyQuery,
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userDataApi;