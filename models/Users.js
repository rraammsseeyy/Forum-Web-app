const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email_address: {
    type: String,
  },
  fullname: {
    type: String,
  },

  sex: {
    type: String,
  },
 
  password: {
    type: String,
  },
  
  timeStamp: {
    type: Object,
    default: new Date()
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
