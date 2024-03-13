const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://0.0.0.0:27017/First_Project")
  .then(() => {
    console.log("Database Connected.");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Delivered" });
});

app.post("/Register", (req, res) => {
  const loginData = req.body;
  console.log(loginData); // Logging the received login data
  res.status(200).send({ message: "Login data received successfully" });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
