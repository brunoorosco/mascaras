
exports.up = function(knex) {
    return knex.schema.createTable('school', function (table) {
        table.increments();
        table.string('name');
        table.timestamp('created_at',{ useTz: true }).defaultTo(knex.fn.now());
        table.timestamp('updated_at',{ useTz: true }).defaultTo(knex.fn.now());

      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('school')
};
