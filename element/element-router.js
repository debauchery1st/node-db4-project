const express = require("express");

const Elements = require("./element-model.js");

const router = express.Router();

router.post("/", (req, res) => {
  Elements.addElement(req.body, "id").then(arrayOfOne =>
    Elements.getElementById(arrayOfOne[0]).then(rcp => {
      res.status(201).json(rcp);
    })
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Elements.updateElement(req.body, id)
    .then(upd => res.status(200).json(upd))
    .catch(errors => res.status(400).json({ error: errors }));
});

router.get("/", (req, res) => {
  Elements.getElement()
    .then(elements => {
      res.status(200).json(elements);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get elements" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Elements.getElementById(id)
    .then(recipe => {
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json(recipe);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get elements" });
    });
});

router.delete("/:id", (req, res) => {
  Elements.removeElement(req.params.id)
    .then(rcp => res.status(200).json({ removed: rcp }))
    .catch(error => res.status(200).json(error));
});

module.exports = router;
