const express = require("express");
const helmet = require("helmet");
const server = express();

const recipeRouter = require("./recipes/recipe-router");
const elementRouter = require("./element/element-router");
const ingredientsRouter = require("./ingredients/ingredients-router");
const massRouter = require("./mass/mass-router");
const measureRouter = require("./measure/measure-router");
const categoryRouter = require("./category/category-router");
const stepRouter = require("./step/step-router");

server.use(express.json());
server.use(helmet());

server.use("/api/recipes", recipeRouter);
server.use("/api/elements", elementRouter);
server.use("/api/ingredients", ingredientsRouter);
server.use("/api/mass", massRouter);
server.use("/api/measure", measureRouter);
server.use("/api/category", categoryRouter);
server.use("/api/step", stepRouter);

server.get("/", (req, res) => {
  res.status(200).send("Recipe API");
});

module.exports = server;
