exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, recipe_id: 1, measure_id: 1 },
        { id: 2, recipe_id: 1, measure_id: 2 },
        { id: 3, recipe_id: 1, measure_id: 3 },
        { id: 4, recipe_id: 1, measure_id: 4 },
        { id: 5, recipe_id: 1, measure_id: 5 },
        { id: 6, recipe_id: 1, measure_id: 6 },
        { id: 7, recipe_id: 1, measure_id: 7 },
        { id: 8, recipe_id: 1, measure_id: 8 },
        { id: 9, recipe_id: 1, measure_id: 9 }
      ]);
    });
};
