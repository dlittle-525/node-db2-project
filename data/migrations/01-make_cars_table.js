// DO YOUR MAGIC
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
      table.increments("id")
      table.string("vin").notNull().unique()
      table.string("make").notNull()
      table.string("model").notNull()
      table.decimal("mileage").notNull()
      table.string("title")
      table.string("transmission")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
