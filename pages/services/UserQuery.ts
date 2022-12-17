import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { DocumentNode } from "graphql";
import { ClientError, GraphQLClient, request } from "graphql-request";
import CREDENTIALS from '../../credentials.json';

const client = new GraphQLClient(
  CREDENTIALS.ENDPOINT.USERS,
  {
  headers: () => ({ 'x-api-key': CREDENTIALS.AUTH }),
});
const requestQuery = async (_document)=>{
  return await client.request(_document);
};

export const graphqlUserQuery =
  (): BaseQueryFn<
    { document: string | DocumentNode; variables?: any },
    unknown,
    ClientError
  > =>
    async ({ document, variables }) => {
      try {
        return { data: await requestQuery(document)}
      } catch (error) {
        if (error instanceof ClientError) {
          return { error };
        }
        throw error;
      }
    };