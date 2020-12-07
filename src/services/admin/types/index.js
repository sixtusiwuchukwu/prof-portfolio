const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    getCurrentUser: User!
  }
  extend type Mutation {
    adminUpdateProfile(data: updateProfileInput): String!
    adminUpdatePassword(data: updatePasswordInput): String!
    adminLogin(data: adminLoginInput): String
    adminLogout: String
  }

  type User {
    username: String!
    gmail: String!
    avater: String!
  }

  input updateProfileInput {
    username: String
    gmail: String
    avater: String
  }

  input updatePasswordInput {
    oldPassword: String
    newPassword: String
  }

  input adminLoginInput {
    gmail: String
    password: String
  }
`;
