const express = require("express");

const Recipes = require("./scheme-model.js");

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

router.get("/:id/ingredients", (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(ingredients => {
      if (ingredients.length) {
        res.json(ingredients);
      } else {
        res.status(404).json(ingredients);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get ingredients" });
    });
});

// router.post("/", (req, res) => {
//   const schemeData = req.body;

//   Recipes.add(schemeData)
//     .then(scheme => {
//       res.status(201).json(scheme);
//     })
//     .catch(err => {
//       res.status(400).json(scheme);
//     });
// });

// router.post("/:id/steps", (req, res) => {
//   const stepData = req.body;
//   const { id } = req.params;

//   Recipes.findById(id)
//     .then(scheme => {
//       if (scheme) {
//         Recipes.addStep(stepData, id).then(step => {
//           res.status(201).json(step);
//         });
//       } else {
//         res
//           .status(404)
//           .json({ message: "Could not find scheme with given id." });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: "Failed to create new step" });
//     });
// });

// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Recipes.findById(id)
//     .then(scheme => {
//       if (scheme) {
//         Recipes.update(changes, id).then(updatedScheme => {
//           res.json(updatedScheme);
//         });
//       } else {
//         res
//           .status(404)
//           .json({ message: "Could not find scheme with given id" });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: "Failed to update scheme" });
//     });
// });

// router.delete("/:id", (req, res) => {
//   const { id } = req.params;

//   Recipes.remove(id)
//     .then(deleted => {
//       if (deleted) {
//         res.json(deleted);
//       } else {
//         res.status(404).json(null);
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: "Failed to delete scheme" });
//     });
// });

module.exports = router;
