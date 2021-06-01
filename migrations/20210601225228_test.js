
exports.up = function(knex) {
  return knex.schema
  .createTable("customers", tbl => {
        tbl.increments();
        tbl.string("email",128)
        .notNullable()
        .unique();
  })
  .createTable("products", tbl => {
        tbl.increments();
        tbl.string("name",128)
        .notNullable()
        .unique();
        tbl.string("description",1000)
        .notNullable();
        tbl.integer("price",128)
        .unsigned();
  })
  .createTable("parts",tbl => {
      tbl.increments();
      tbl.string("name",128)
      .notNullable()
      .unique();
      tbl.string("description",1000)
      .notNullable();
      tbl.integer("price",128)
      .unsigned();
  })

  .createTable("parts_by_products",tbl => {
      tbl.increments();
      tbl.integer("product_id",128)
        .references("products.id")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.integer("part_id",128)
        .references("parts.id")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("parts_by_products")
  .dropTableIfExists("parts")
  .dropTableIfExists("products")
  .dropTableIfExists("customers")
};
