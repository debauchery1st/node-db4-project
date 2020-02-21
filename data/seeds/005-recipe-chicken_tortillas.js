exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe").insert([
        {
          id: 1,
          name: "chicken tortillas",
          description: "delicious food",
          minutes: 25,
          yield: 12
        }
      ]);
    });
};
