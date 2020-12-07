const {
  AdminMutation,
  AdminQuery,
} = require("../src/services/admin/resolver/index");
const {
  CollectionMutation,
  CollectionQuery,
} = require("../src/services/collections/resolver/index");

const Mutation = {
  ...AdminMutation,
  ...CollectionMutation,
};
const Query = {
  ...AdminQuery,
  ...CollectionQuery,
};

module.exports = {
  Mutation,
  Query,
};
