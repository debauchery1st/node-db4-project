const db = require("../data/db-config.js");

module.exports = {
  getInstructions,
  getShoppingList,
  getRecipeById,
  getRecipes
};

function getRecipes() {
  return db("recipe");
}

function getRecipeById(id) {
  return db("recipe").where({ id });
}

function getInstructions(recipe_id) {
  return db("step")
    .where({ recipe_id })
    .orderBy("step_number");
}

function getShoppingList(recipe_id) {
  return db("ingredients")
    .innerJoin("measure", "ingredients.measure_id", "measure.id")
    .innerJoin("mass", "measure.mass_id", "mass.id")
    .innerJoin("element", "measure.element.id", "element.id")
    .innerJoin("category", "element.category_id", "category.id")
    .where({ recipe_id });
}
