const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", userRoute);

mongoose
  .connect(
    "mongodb+srv://root:root@aeliasdb.t7xow.mongodb.net/?retryWrites=true&w=majority&appName=Aeliasdb"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("server is runnnig on port 3000....");
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error.message);
  });
