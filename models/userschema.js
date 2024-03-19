const mongoose = require("mongoose");

const newUserSchema = new mongoose.Schema({
    userName: {
      type: String,
    },
    DOB: {
      type: String,
    },
    Age: {
      type: Number,
    },
    Gender: {
      type: String
    }
  });
  
  const userDB = mongoose.model("users", newUserSchema);
  
module.exports=userDB;