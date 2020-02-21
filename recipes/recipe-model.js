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
  return db
    .select("step_number", "instruction")
    .from("step")
    .where({ recipe_id })
    .orderBy("step_number");
}

function getShoppingList(recipe_id) {
  return db
    .select(
      "measure.amount as amount",
      "mass.type as measurement",
      "element.name as name",
      "category.name as category"
    )
    .from("ingredients")
    .innerJoin("measure", "measure_id", "measure.id")
    .innerJoin("mass", "mass_id", "mass.id")
    .innerJoin("element", "element_id", "element.id")
    .innerJoin("category", "category_id", "category.id")
    .where({ "ingredients.recipe_id": recipe_id });
}
