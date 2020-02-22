const express = require("express");

const Recipes = require("./recipe-model.js");

const router = express.Router();

router.post("/", (req, res) => {
  Recipes.addRecipe(req.body, "id").then(arrayOfOne =>
    Recipes.getRecipeById(arrayOfOne[0]).then(rcp => {
      res.status(201).json(rcp);
    })
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Recipes.updateRecipe(req.body, id)
    .then(upd => res.status(200).json(upd))
    .catch(errors => res.status(400).json({ error: errors }));
});

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
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
        res.status(200).json(recipe);
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

router.delete("/:id", (req, res) => {
  Recipes.removeRecipe(req.params.id)
    .then(rcp => res.status(200).json({ removed: rcp }))
    .catch(error => res.status(200).json(error));
});

module.exports = router;
