const express = require("express");

const Ingredients = require("./ingredients-model.js");

const router = express.Router();

router.post("/", (req, res) => {
  Ingredients.addIngredients(req.body, "id").then(arrayOfOne =>
    Ingredients.getIngredientsById(arrayOfOne[0]).then(rcp => {
      res.status(201).json(rcp);
    })
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Ingredients.updateIngredients(req.body, id)
    .then(upd => res.status(200).json(upd))
    .catch(errors => res.status(400).json({ error: errors }));
});

router.get("/", (req, res) => {
  Ingredients.getIngredients()
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get ingredients" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Ingredients.getIngredientsById(id)
    .then(recipe => {
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json(recipe);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get ingredients" });
    });
});

router.delete("/:id", (req, res) => {
  Ingredients.removeIngredients(req.params.id)
    .then(rcp => res.status(200).json({ removed: rcp }))
    .catch(error => res.status(200).json(error));
});

module.exports = router;
