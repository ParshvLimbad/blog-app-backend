const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
      default: 0,
    },

    author: {
      type: String,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
