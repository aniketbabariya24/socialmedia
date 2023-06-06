const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  text: String,
  image: String,
  createdAt: {
    type:Date,
    default:Date.now()
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      text: String,
      createdAt: {
        type:Date,
        default:Date.now()
      },
    },
  ],
});

const PostModel = mongoose.model("post", postSchema);

module.exports = { PostModel };