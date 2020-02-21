exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("measure")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("measure").insert([
        { id: 1, amount: 2, mass_id: 1, element_id: 1 },
        { id: 2, amount: 12, mass_id: 6, element_id: 2 },
        { id: 3, amount: 0.25, mass_id: 5, element_id: 3 },
        { id: 4, amount: 1, mass_id: 2, element_id: 4 },
        { id: 5, amount: 1, mass_id: 2, element_id: 5 },
        { id: 6, amount: 0.5, mass_id: 2, element_id: 6 },
        { id: 7, amount: 1, mass_id: 1, element_id: 7 },
        { id: 8, amount: 2, mass_id: 1, element_id: 8 },
        { id: 9, amount: 0.5, mass_id: 5, element_id: 9 }
      ]);
    });
};
