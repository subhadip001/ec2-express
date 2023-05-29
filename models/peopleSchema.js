const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const People = mongoose.model("People", peopleSchema);
module.exports = { People };
