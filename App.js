const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
require("dotenv").config();

const App = express();
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));
App.use(logger("dev"));

const route = require("./src/index");

const Port = 3500;

App.listen(Port, function() {
  console.log("Server has running");
});

App.use("/api", route);
App.get("*"),
  (res, req) => {
    req.send("404 Page Not Found");
  };
// App.get("/favicon.ico", (req, res) => res.status(204));
