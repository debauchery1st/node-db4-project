exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("element")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("element").insert([
        { id: 1, name: "chicken breasts", common_mass: 1, category_id: 4 },
        { id: 2, name: "flour tortillas", common_mass: 7, category_id: 10 }
      ]);
    });
};
