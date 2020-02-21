const express = require("express");
const helmet = require("helmet");
const server = express();

const recipeRouter = require("./recipes/recipe-router");

server.use(express.json());
server.use(helmet());

server.use("/api/recipes", recipeRouter);

server.get("/", (req, res) => {
  res.status(200).send("Recipe API");
});

module.exports = server;
