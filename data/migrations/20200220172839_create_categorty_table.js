exports.up = function(knex) {
  return knex.schema.createTable("category", tbl => {
    tbl.increments();
    tbl.string("name", 255);
    // food categories
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("category");
};
