const express = require("express");

const Measure = require("./measure-model.js");

const router = express.Router();

router.post("/", (req, res) => {
  Measure.addMeasure(req.body, "id").then(arrayOfOne =>
    Measure.getMeasureById(arrayOfOne[0]).then(rcp => {
      res.status(201).json(rcp);
    })
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Measure.updateMeasure(req.body, id)
    .then(upd => res.status(200).json(upd))
    .catch(errors => res.status(400).json({ error: errors }));
});

router.get("/", (req, res) => {
  Measure.getMeasure()
    .then(measures => {
      res.status(200).json(measures);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get measures" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Measure.getMeasureById(id)
    .then(recipe => {
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json(recipe);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get measures" });
    });
});

router.delete("/:id", (req, res) => {
  Measure.removeMeasure(req.params.id)
    .then(rcp => res.status(200).json({ removed: rcp }))
    .catch(error => res.status(200).json(error));
});

module.exports = router;
