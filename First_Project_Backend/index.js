const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

const userModel = require("./models/userModel");

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

app.post("/", async (req, res) => {
  const userCred = req.body;
  try{
    const user =await userModel.findOne({email:userCred.email});
    if(user!=null){
        bcrypt.compare(userCred.password,user.password,(err,success)=>{
            // res.send(success)
            console.log(user.password)
            console.log(userCred.password)
            if(success==true)
            {
                res.send({message:"Login Success"})
            }
            else{
                res.status(402).send({message:"Wrong Password"})
            }
        })
    }
    else{
        res.status(404).send({message:"User not found"})
    }
  }
  catch(err){
    console.log(err)
    // res.send({message:"Error occured"})
  }
});

app.post("/Register", (req, res) => {
  const user = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    if (!err) {
      bcrypt.hash(user.password, salt, (err, newPassword) => {
        if (!err) {
          user.password = newPassword;
          userModel
            .create(user)
            .then((doc) => {
              res
                .status(201)
                .send({ message: "Login data received successfully" });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send({ message: "Some Problem" });
            });
        }
      });
    }
  });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
