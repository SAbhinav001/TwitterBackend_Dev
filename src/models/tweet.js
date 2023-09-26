const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet cannot be more than 250 character"],
    },

    hashtags : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref :'Hastag'
      }
    ]
  },
  { timestamps: true }
);

const Tweet = new mongoose.model("Tweet", blogSchema);

module.exports = Tweet;
