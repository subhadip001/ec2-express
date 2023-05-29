const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
  try {
    await mongoose.connect("mongodb://43.204.100.44:27017/fruitsDB");
    console.log("connected")
  } catch (error) {
    console.log(error);
  }
}

connect()