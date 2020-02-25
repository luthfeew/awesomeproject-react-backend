const express = require("express");
const Route = express.Router();

const data = require("./routes/data");

Route.use("/data", data);

module.exports = Route;
