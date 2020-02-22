const express = require("express");

const Category = require("./category-model.js");

const router = express.Router();

router.post("/", (req, res) => {
  Category.addCategory(req.body, "id").then(arrayOfOne =>
    Category.getCategoryById(arrayOfOne[0]).then(rcp => {
      res.status(201).json(rcp);
    })
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Category.updateCategory(req.body, id)
    .then(upd => res.status(200).json(upd))
    .catch(errors => res.status(400).json({ error: errors }));
});

router.get("/", (req, res) => {
  Category.getCategory()
    .then(categorys => {
      res.status(200).json(categorys);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get categorys" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Category.getCategoryById(id)
    .then(recipe => {
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json(recipe);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get categorys" });
    });
});

router.delete("/:id", (req, res) => {
  Category.removeCategory(req.params.id)
    .then(rcp => res.status(200).json({ removed: rcp }))
    .catch(error => res.status(200).json(error));
});

module.exports = router;
