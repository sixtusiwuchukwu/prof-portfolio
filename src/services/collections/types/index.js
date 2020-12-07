const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    getCollections: [collection!]
    getcollection(data: getcollectionInput): collection!
    getStatistics: StatisticsResponse
  }

  extend type Mutation {
    createCollection(data: createCollectionInput): String!
    updateCollection(data: updateCollectionInput): String
    addItemToCollection(data: addItemToCollectionInput): String
    deleteCollectionItem(data: deleteCollectionItemInput): String
    deleteCollection(data: deleteCollectionInput): String!
  }

  input deleteCollectionInput {
    collectionName: String!
  }

  type collection {
    id: ID
    collectionName: String!
    collectionData: [url]
    datalength: Int
  }

  type url {
    id: ID
    url: String
  }
  type StatisticsResponse {
    totalUploads: Int!
    totalCollection: Int!
  }
  input updateCollectionInput {
    collectionName: String!
    id: ID
  }
  input addItemToCollectionInput {
    url: String!
    collectionName: String!
  }

  input createCollectionInput {
    collectionName: String!
  }
  input deleteCollectionItemInput {
    id: ID!
    collectionName: String!
  }

  input getcollectionInput {
    collectionName: String!
  }
`;
