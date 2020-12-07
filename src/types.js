const { gql } = require("apollo-server-express");
const adminschema = require("./services/admin/types/index");
const collectionSchema = require("./services/collections/types/index");
const linkSchemas = gql`
  type Mutation {
    _: Boolean
  }

  type Query {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

module.exports = [linkSchemas, adminschema, collectionSchema];
