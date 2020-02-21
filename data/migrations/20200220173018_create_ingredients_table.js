exports.up = function(knex) {
  return knex.schema.createTable("ingredients", tbl => {
    // tbl.primary(["measure_id"], ["recipe_id"]);
    tbl.increments();
    tbl
      .integer("measure_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("measure");
    // .onDelete("CASCADE");
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipe");
    // .onDelete("CASCADE");
  });
};

exports.down = function(knex) {};
