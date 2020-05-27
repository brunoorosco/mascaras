
exports.up = function(knex) {
    return knex.schema.createTable('entradaEstoque', function (table) {
         table.increments();
         table.string('notaFiscal');
         table.date('dataEntrada');
         table.integer('fornecedor_id');
         table.integer('material_id');
         table.float('quantity');
         table.float('unitPrice');
         table.float('totalPrice');
         table.timestamp('created_at',{ useTz: true }).defaultTo(knex.fn.now());
         table.timestamp('updated_at',{ useTz: true }).defaultTo(knex.fn.now());

         table.foreign('material_id').references('id').inTable('material');
         table.foreign('fornecedor_id').references('id').inTable('fornecedor');
       })
 };
 
 exports.down = function(knex) {
   return knex.schema.dropTable('entradaEstoque')
 };
 