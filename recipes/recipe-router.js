const express = require("express");

const Recipes = require("./recipe-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Recipes.getRecipeById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).json(recipe);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(ingredients => {
      if (ingredients.length) {
        res.status(200).json(ingredients);
      } else {
        res.status(404).json(ingredients);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get ingredients" });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id).then(steps => {
    res.status(200).json(steps);
  });
});

router.get("/:id/details", (req, res) => {
  const { id } = req.params;
  const details = {
    recipe: [],
    shoppingList: [],
    instructions: []
  };
  Recipes.getRecipeById(id)
    .then(rcp => {
      details.recipe = rcp;
      Recipes.getShoppingList(id).then(lst => {
        details.shoppingList = lst;
        Recipes.getInstructions(id).then(stps => {
          details.instructions = stps;
          res.status(200).json(details);
        });
      });
    })
    .catch(errors => res.status(400).json({ error: errors }));
});

module.exports = router;
