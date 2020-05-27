
exports.up = function(knex) {
    return knex.schema.createTable('estoque', function (table) {
         table.increments();
         table.float('total');
         table.float('min');
         table.float('max');
         table.integer('material_id');
         table.timestamp('created_at',{ useTz: true }).defaultTo(knex.fn.now());
         table.timestamp('updated_at',{ useTz: true }).defaultTo(knex.fn.now());

         table.foreign('material_id').references('id').inTable('material');
       })
 };
 
 exports.down = function(knex) {
   return knex.schema.dropTable('estoque')
 };
 