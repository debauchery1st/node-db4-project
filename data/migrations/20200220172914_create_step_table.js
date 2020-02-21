exports.up = function(knex) {
  return knex.schema.createTable("step", tbl => {
    tbl.increments();
    // foreign key
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipe");
    // .onDelete("CASCADE");
    tbl.integer("step_number").notNullable();
    tbl.string("instruction", 1520).notNullable();
  });
};

exports.down = function(knex) {};
