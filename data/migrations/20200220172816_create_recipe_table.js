exports.up = function(knex) {
  return knex.schema.createTable("recipe", tbl => {
    tbl.increments();
    tbl.text("name", 255).notNullable();
    tbl.text("description", 255).notNullable();
    tbl
      .integer("minutes")
      .unsigned()
      .notNullable();
    tbl
      .integer("yield") // servings, cookies, etc ?
      .unsigned()
      .notNullable();
    // recipe
  });
};

exports.down = function(knex) {};
