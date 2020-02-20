exports.up = function(knex) {
  return knex.schema.createTable("mass", tbl => {
    tbl.increments(); // mass.id
    tbl.string("type", 255);
    // teaspoon, ounce, etc
  });
};

exports.down = function(knex) {};
