const db = require("../data/db-config.js");

/* 
  in this app-context category will store 
    types of cuisine, food-groups, etc
*/

module.exports = {
  addCategory, // CREATE
  getCategory, // REQUEST
  getCategoryById, // ''
  updateCategory, // UPDATE
  removeCategory // DELETE
};

function addCategory(category) {
  return db("category").insert(category, "id");
}

function getCategory() {
  return db("category");
}

function getCategoryById(id) {
  return db("category").where({ id });
}

function updateCategory(cat, id) {
  if (!id) {
    return { error: "id required" };
  }
  return db("category")
    .update(cat)
    .where({ id })
    .then(() => getCategoryById(id));
}

function removeCategory(id) {
  return getCategoryById(id).then(toBeDeleted => {
    return db("category")
      .del()
      .where({ id })
      .then(() => toBeDeleted);
  });
}
