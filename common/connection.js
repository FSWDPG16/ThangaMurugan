const mongoose = require("mongoose");

const connection = ()=>{
mongoose
  .connect(process.env.MongoUrl)
  .then(() => {
    console.log("MongoDB connected Successully.......");
  })
  .catch((err) => { 
    console.log("Connection Error :", err);
  });
};

module.exports=connection;