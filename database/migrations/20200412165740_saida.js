
exports.up = function(knex) {
   return knex.schema.createTable('saida', function (table) {
        table.increments();
        table.integer('school_id');
        table.integer('quantidade');
        table.string('data');
        table.timestamp('created_at',{ useTz: true }).defaultTo(knex.fn.now());
        table.timestamp('updated_at',{ useTz: true }).defaultTo(knex.fn.now());

        table.foreign('school_id').references('id').inTable('school');

      })
};

exports.down = function(knex) {
   return knex.schema.dropTable('saida')
};
