import { gql } from "@apollo/client";

export const GETCURRENTUSER = gql`
  query GetCurrentUser {
    getCurrentUser {
      gmail
      username
      avater
    }
  }
`;

export const GETSTAT = gql`
  query GetStatistics {
    getStatistics {
      totalUploads
      totalCollection
    }
  }
`;

export const GETCOLLECTIONS = gql`
  query GetCollections {
    getCollections {
      collectionName
      datalength
      collectionData {
        url
      }
      id
    }
  }
`;

export const GETCOLLECTION = gql`
  query getcollection($collectionName: String!) {
    getcollection(data: { collectionName: $collectionName }) {
      id
      collectionName
      datalength
      collectionData {
        id
        url
      }
    }
  }
`;
