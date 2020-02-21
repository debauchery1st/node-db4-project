exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("mass")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("mass").insert([
        { id: 1, type: "whole" },
        { id: 2, type: "teaspoon" },
        { id: 3, type: "ounce" },
        { id: 4, type: "gram" },
        { id: 5, type: "cup" },
        { id: 6, type: "large" },
        { id: 7, type: "medium" },
        { id: 8, type: "small" }
      ]);
    });
};
