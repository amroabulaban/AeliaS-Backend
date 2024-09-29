const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


app.use("/", userRoute);

mongoose
  .connect(
    "mongodb+srv://root:root@aeliasdb.t7xow.mongodb.net/?retryWrites=true&w=majority&appName=Aeliasdb"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(8000, () => {
      console.log("server is runnnig on port 8000....");
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error.message);
  });
