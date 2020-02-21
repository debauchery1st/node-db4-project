exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("element")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("element").insert([
        { id: 1, name: "chicken breasts", common_mass: 1, category_id: 4 },
        { id: 2, name: "flour tortillas", common_mass: 7, category_id: 10 },
        { id: 3, name: "lime juice", common_mass: 5, category_id: 2 },
        { id: 4, name: "garlic (minced)", common_mass: 2, category_id: 1 },
        { id: 5, name: "chili powder", common_mass: 2, category_id: 9 },
        { id: 6, name: "cumin", common_mass: 2, category_id: 9 },
        { id: 7, name: "onion", common_mass: 1, category_id: 1 },
        { id: 8, name: "bell pepper", common_mass: 1, category_id: 1 },
        { id: 9, name: "salsa", common_mass: 1, category_id: 1 },
        { id: 10, name: "shredded cheese", common_mass: 5, category_id: 11 }
      ]);
    });
};
