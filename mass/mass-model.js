const db = require("../data/db-config.js");

/*
    teaspoon, cup, ounce, gram...etc
*/

module.exports = {
  addType, // CREATE
  getTypes, // REQUEST
  getTypeById, // ''
  updateType, // UPDATE
  removeType // DELETE
};

function addType(mass) {
  return db("mass").insert(mass, "id");
}

function getTypes() {
  return db("mass");
}

function getTypeById(id) {
  return db("mass").where({ id });
}

function updateType(mass, id) {
  if (!id) {
    return { error: "id required" };
  }
  return db("mass")
    .update(mass)
    .where({ id })
    .then(() => getTypeById(id));
}

function removeType(id) {
  return getTypeById(id).then(toBeDeleted => {
    return db("mass")
      .del()
      .where({ id })
      .then(() => toBeDeleted);
  });
}
