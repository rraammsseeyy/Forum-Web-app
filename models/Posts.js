const { number } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  
  username: {
    type: String,
  },
  post: {
    type: String,
  },
 
  likes: {
    type: Number,
    default: 0
  },
 
  timeStamp: {
    type: Object,
    default: new Date()
  },
});

const Posts = mongoose.model("Posts", userSchema);

module.exports = Posts;
