exports.up = function(knex) {
  return knex.schema.createTable("ingredients", tbl => {
    tbl
      .integer("measure_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("measure")
      .onDelete("RESTRICT");
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipe")
      .onDelete("RESTRICT");
  });
};

exports.down = function(knex) {};
