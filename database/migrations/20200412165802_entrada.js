
exports.up = function(knex) {
   return knex.schema.createTable('entrada', function (table) {
        table.increments();
        table.string('material');
        table.integer('quantidade');
        table.string('data');
        table.timestamp('created_at',{ useTz: true }).defaultTo(knex.fn.now());
        table.timestamp('updated_at',{ useTz: true }).defaultTo(knex.fn.now());

      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('entrada')
};
