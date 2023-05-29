const express = require("express");
const { People } = require("../models/peopleSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const peoples = await People.find();
    console.log(peoples)
    res.json(peoples);
  } catch (error) {
    res.status(500).json({message : "Internal server error"})
  }
});

createPeople() 

async function createPeople(){
    try {
        const people = People.create({name : "Sally" , age : 17})
        people.save()
    } catch (error) {
        console.log(error)
    }
}

module.exports = router