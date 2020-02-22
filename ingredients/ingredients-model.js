const db = require("../data/db-config.js");

/* 
  amount   mass_id(FK)  element_id(FK)   
  
  1       *cup         *milk

*/

module.exports = {
  addIngredients, // CREATE
  getIngredients, // REQUEST
  getIngredientsById, // ''
  updateIngredients, // UPDATE
  removeIngredients // DELETE
};

function addIngredients(ingredients) {
  return db("ingredients").insert(ingredients, "id");
}

function getIngredients() {
  return db("ingredients");
}

function getIngredientsById(id) {
  return db("ingredients").where({ id });
}

function updateIngredients(ingredients, id) {
  if (!id) {
    return { error: "id required" };
  }
  return db("ingredients")
    .update(ingredients)
    .where({ id })
    .then(() => getIngredientsById(id));
}

function removeIngredients(id) {
  return getIngredientsById(id).then(toBeDeleted => {
    return db("ingredients")
      .del()
      .where({ id })
      .then(() => toBeDeleted);
  });
}
