const Mongoose = require("mongoose");
const CollectionModel = require("../../../models/collections/index");
const Base = require("../../../base");
const { ValidationError, UserInputError } = require("apollo-server-express");

class Collection extends Base {
  async GetCollections(user) {
    this.isLoggedIn(user);
    return await CollectionModel.find({});
  }
  async GetCollection(data, user) {
    this.isLoggedIn(user);
    const { collectionName } = data;
    const foundcollection = await CollectionModel.findOne({
      collectionName,
    });

    if (!foundcollection) {
      throw new UserInputError("collection name does not exit");
    }
    return await CollectionModel.findOne({ collectionName: collectionName });
  }

  async CreateCollection(data, user) {
    this.isLoggedIn(user);
    const { collectionName } = data;

    let foundcollection = await CollectionModel.findOne({
      collectionName: collectionName,
    });

    if (foundcollection) {
      throw new ValidationError("collection already exits");
    }
    await CollectionModel.create({ collectionName });
    return `collection of ${collectionName} has been created sucessfully`;
  }
  async UpdateCollection(data, user) {
    this.isLoggedIn(user);

    const { collectionName, id } = data;

    let foundcollection = await CollectionModel.findById(id);

    if (!foundcollection) {
      throw new UserInputError("collection does not exist");
    }
    await CollectionModel.findOneAndUpdate(
      { _id: id },
      { collectionName },
      { new: true }
    );
    return `sucessfully update collection Name of ${foundcollection.collectionName} to ${collectionName}`;
  }
  async AddItemToCollection(data, user) {
    this.isLoggedIn(user);
    const { url, collectionName } = data;
    let foundcollection = await CollectionModel.findOne({
      collectionName,
    });

    if (!foundcollection) {
      throw new UserInputError("collection does not exist");
    }
    await CollectionModel.findOneAndUpdate(
      { collectionName },
      {
        $addToSet: {
          collectionData: { url },
        },
        $set: {
          datalength: foundcollection.datalength + 1,
        },
      },
      { new: true }
    );
    return `sucessfully added item to  ${collectionName} collection`;
  }

  async GetStatistics(user) {
    this.isLoggedIn(user);

    const totalCollection = await CollectionModel.countDocuments();

    const totalUploads = await CollectionModel.find({});

    let totaluploadLength = 0;

    totalUploads.forEach((item) => {
      totaluploadLength += item.collectionData.length;
    });

    return { totalUploads: totaluploadLength, totalCollection };
  }
  async DeleteCollectionItem(data, user) {
    this.isLoggedIn(user);
    let { id, collectionName } = data;
    let foundItem = await CollectionModel.findOne({ collectionName });

    if (!foundItem) {
      throw new UserInputError("collection not found");
    }
    await CollectionModel.findOneAndUpdate(
      { collectionName },
      {
        $pull: {
          collectionData: id,
        },
        $set: { datalength: foundItem.datalength - 1 },
      },
      { new: true },
      (err, doc) => {
        if (doc) console.log(doc, "doc");
      }
    );
    return "sucessfully deleted item";
  }
  async DeleteCollection(data, user) {
    this.isLoggedIn(user);
    const { collectionName } = data;
    await CollectionModel.findOneAndDelete({ collectionName });
    return "collection sucessfully deleted";
  }
}

module.exports = Collection;
