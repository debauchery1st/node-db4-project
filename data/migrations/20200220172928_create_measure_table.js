exports.up = function(knex) {
  return knex.schema.createTable("measure", tbl => {
    tbl.increments();
    tbl
      .integer("amount")
      .unsigned()
      .notNullable();
    tbl
      .integer("element_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("element");
    // .onDelete("RESTRICT");
    tbl
      .integer("mass_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("mass");
    // .onDelete("RESTRICT");
  });
};

exports.down = function(knex) {};
