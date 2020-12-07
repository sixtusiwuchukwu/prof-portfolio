// const { Collection } = require("mongoose");

const CollectionQuery = {
  getStatistics: async (root, { data }, { datasources, req }) => {
    const { Collection } = datasources;
    return await new Collection().GetStatistics(req.user);
  },
  getcollection: async (root, { data }, { datasources, req }) => {
    const { Collection } = datasources;
    return await new Collection().GetCollection(data, req.user);
  },
  getCollections: async (root, { data }, { datasources, req }) => {
    const { Collection } = datasources;
    return await new Collection().GetCollections(req.user);
  },
};

const CollectionMutation = {
  createCollection: async (root, { data }, { datasources, req }) => {
    const { Collection } = datasources;
    return await new Collection().CreateCollection(data, req.user);
  },
  updateCollection: async (root, { data }, { datasources, req }) => {
    const { Collection } = datasources;
    return await new Collection().UpdateCollection(data, req.user);
  },
  addItemToCollection: async (root, { data }, { datasources, req }) => {
    const { Collection } = datasources;
    return await new Collection().AddItemToCollection(data, req.user);
  },
  deleteCollectionItem: async (root, { data }, { datasources, req }) => {
    const { Collection } = datasources;
    return await new Collection().DeleteCollectionItem(data, req.user);
  },
  deleteCollection: async (root, { data }, { datasources, req }) => {
    const { Collection } = datasources;
    return await new Collection().DeleteCollection(data, req.user);
  },
};

module.exports = {
  CollectionMutation,
  CollectionQuery,
};
