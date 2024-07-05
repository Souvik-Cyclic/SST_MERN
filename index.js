const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://souvik:OlBqIAcMe0wgoIgj@cluster0.bbuqkww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Failed", err);
  });

const app = express();

app.listen(8086, () => {
  console.log("Server started at port 8086");
});
