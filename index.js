const express = require("express");
const connection = require("./common/connection")
const router = require("./routes/userroute");
const app = express();
app.use(express.json());
require('dotenv').config();


connection();
app.use(router);




app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running on ", process.env.PORT);
});
