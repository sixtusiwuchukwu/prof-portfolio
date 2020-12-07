const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
  {
    collectionName: {
      type: String,
      trim: true,
      minlength: 4,
      uppercase: true,
    },
    collectionData: [
      {
        url: {
          type: String,
          trim: true,
          default: null,
        },
      },
    ],
    datalength: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("collection", collectionSchema);
