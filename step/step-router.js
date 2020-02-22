const express = require("express");

const Step = require("./step-model.js");

const router = express.Router();

router.post("/", (req, res) => {
  Step.addStep(req.body, "id").then(arrayOfOne =>
    Step.getStepById(arrayOfOne[0]).then(rcp => {
      res.status(201).json(rcp);
    })
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Step.updateStep(req.body, id)
    .then(upd => res.status(200).json(upd))
    .catch(errors => res.status(400).json({ error: errors }));
});

router.get("/", (req, res) => {
  Step.getStep()
    .then(step => {
      res.status(200).json(step);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get elements" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Step.getStepById(id)
    .then(step => {
      if (step) {
        res.status(200).json(step);
      } else {
        res.status(404).json(step);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get elements" });
    });
});

router.delete("/:id", (req, res) => {
  Step.removeStep(req.params.id)
    .then(rcp => res.status(200).json({ removed: rcp }))
    .catch(error => res.status(200).json(error));
});

module.exports = router;
