const express = require("express");
const cors = require("cors");
const app = express();
require("./config/db");
require("dotenv").config();
const peopleRouter = require("./routers/peopleRouter");

app.use(cors());

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/config.env" });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", peopleRouter);

const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"))
  );
}

module.exports = app;
