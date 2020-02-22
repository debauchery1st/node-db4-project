const db = require("../data/db-config.js");

/* 
  amount   mass_id(FK)  element_id(FK)   
  
  1       *cup         *milk

*/

module.exports = {
  addMeasure, // CREATE
  getMeasure, // REQUEST
  getMeasureById, // ''
  updateMeasure, // UPDATE
  removeMeasure // DELETE
};

function addMeasure(measure) {
  return db("measure").insert(measure, "id");
}

function getMeasure() {
  return db("measure");
}

function getMeasureById(id) {
  return db("measure").where({ id });
}

function updateMeasure(measure, id) {
  if (!id) {
    return { error: "id required" };
  }
  return db("measure")
    .update(measure)
    .where({ id })
    .then(() => getMeasureById(id));
}

function removeMeasure(id) {
  return getMeasureById(id).then(toBeDeleted => {
    return db("measure")
      .del()
      .where({ id })
      .then(() => toBeDeleted);
  });
}
