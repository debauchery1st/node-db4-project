exports.up = function(knex) {
  return knex.schema.createTable("element", tbl => {
    tbl.increments();
    tbl.string("name", 255);
    // foreign key
    tbl
      .integer("common_mass")
      .unsigned()
      .references("id")
      .inTable("mass");
    // .onDelete(`DO NOTHING`);
    // foreign key
    tbl
      .integer("category_id")
      .unsigned()
      .references("id")
      .inTable("category");
    // .onDelete(`DO NOTHING`);
    // element
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("element");
};
