const db = require("../data/db-config.js");

/* 
  recipe_id(FK)   step_number  instruction
  1             1           in a large bowl...
*/

module.exports = {
  addStep, // CREATE
  getStep, // REQUEST
  getStepById, // ''
  updateStep, // UPDATE
  removeStep // DELETE
};

function addStep(step) {
  return db("step").insert(step, "id");
}

function getStep() {
  return db("step");
}

function getStepById(id) {
  return db("step").where({ id });
}

function updateStep(step, id) {
  if (!id) {
    return { error: "id required" };
  }
  return db("step")
    .update(step)
    .where({ id })
    .then(() => getStepById(id));
}

function removeStep(id) {
  return getStepById(id).then(toBeDeleted => {
    return db("step")
      .del()
      .where({ id })
      .then(() => toBeDeleted);
  });
}
