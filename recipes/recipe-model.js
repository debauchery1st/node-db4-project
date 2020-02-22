const db = require("../data/db-config.js");

module.exports = {
  getInstructions,
  getShoppingList,
  getRecipeById,
  getRecipes,
  addRecipe,
  updateRecipe,
  removeRecipe
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

function addRecipe(recipe) {
  return db("recipe").insert(recipe, "id");
}

function updateRecipe(rcp, id) {
  if (!id) {
    return { error: "id required" };
  }
  return db("recipe")
    .update(rcp)
    .where({ id })
    .then(() => getRecipeById(id));
}

function removeRecipe(id) {
  return getRecipeById(id).then(toBeDeleted => {
    return db("recipe")
      .del()
      .where({ id })
      .then(() => toBeDeleted);
  });
}
