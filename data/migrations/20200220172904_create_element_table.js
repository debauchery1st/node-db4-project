exports.up = function(knex) {
  return knex.schema.createTable("element", tbl => {
    tbl.increments();
    tbl.string("name", 255);
    // foreign key
    tbl
      .integer("common_mass")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("mass")
      .onDelete("RESTRICT");
    // foreign key
    tbl
      .integer("category_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("category")
      .onDelete("RESTRICT");
    // element
  });
};

exports.down = function(knex) {};
