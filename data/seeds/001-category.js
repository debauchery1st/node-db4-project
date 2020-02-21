exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("category")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("category").insert([
        { id: 1, name: "Vegetables" },
        { id: 2, name: "Fruits" },
        { id: 3, name: "Fish" },
        { id: 4, name: "Poultry" },
        { id: 5, name: "Meat" },
        { id: 6, name: "Grains" },
        { id: 7, name: "Nuts" },
        { id: 8, name: "Oil" },
        { id: 9, name: "Spices" },
        { id: 10, name: "Bread" },
        { id: 11, name: "Dairy" }
      ]);
    });
};
