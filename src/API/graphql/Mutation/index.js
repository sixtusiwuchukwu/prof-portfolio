import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation onLogin($gmail: String!, $password: String!) {
    adminLogin(data: { gmail: $gmail, password: $password })
  }
`;

export const CREATECOLLECTION = gql`
  mutation onCreateCollection($collectionName: String!) {
    createCollection(data: { collectionName: $collectionName })
  }
`;
export const ADD_TO_COLLECTION = gql`
  mutation onAddToCollection($collectionName: String!, $url: String!) {
    addItemToCollection(data: { collectionName: $collectionName, url: $url })
  }
`;

export const UPDATECOLLECTION = gql`
  mutation updateCollection($collectionName: String!, $id: String!) {
    updateCollection(data: { collectionName: $collectionName, id: $id })
  }
`;
