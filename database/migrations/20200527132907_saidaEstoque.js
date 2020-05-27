exports.up = function(knex) {
    return knex.schema.createTable('saidaEstoque', function (table) {
         table.increments();
         table.string('notaFiscal');
         table.date('dataSaida');    
         table.integer('material_id');
         table.float('quantity');
         table.float('unitPrice');
         table.float('totalPrice');
         table.timestamp('created_at',{ useTz: true }).defaultTo(knex.fn.now());
         table.timestamp('updated_at',{ useTz: true }).defaultTo(knex.fn.now());

         table.foreign('material_id').references('id').inTable('material');
       })
 };
 
 exports.down = function(knex) {
   return knex.schema.dropTable('saidaEstoque')
 };
 