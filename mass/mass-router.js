const express = require("express");

const Mass = require("./mass-model.js");

const router = express.Router();

router.post("/", (req, res) => {
  Mass.addType(req.body, "id").then(arrayOfOne =>
    Mass.getTypeById(arrayOfOne[0]).then(rcp => {
      res.status(201).json(rcp);
    })
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Mass.updateType(req.body, id)
    .then(upd => res.status(200).json(upd))
    .catch(errors => res.status(400).json({ error: errors }));
});

router.get("/", (req, res) => {
  Mass.getTypes()
    .then(mass => {
      res.status(200).json(mass);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get mass" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Mass.getTypeById(id)
    .then(mass => {
      if (mass) {
        res.status(200).json(mass);
      } else {
        res.status(404).json(mass);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get mass" });
    });
});

router.delete("/:id", (req, res) => {
  Mass.removeType(req.params.id)
    .then(rcp => res.status(200).json({ removed: rcp }))
    .catch(error => res.status(200).json(error));
});

module.exports = router;
