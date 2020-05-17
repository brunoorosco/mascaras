exports.up = function(knex) {
    return knex.schema.createTable('fornecedor', function (table) {
         table.increments();
         table.integer('cnpj').notNullable();
         table.string('name', 50).notNullable();
         table.string('street',25).notNullable();
         table.string('number', 7).notNullable();
         table.string('city', 15);
         table.string('state', 2);
         table.string('telephone', 15);
         table.string('celular', 15);
         table.string('contact', 15);
         table.string('email', 30);
         table.integer('payment_id');
         table.timestamp('created_at',{ useTz: true }).defaultTo(knex.fn.now());
         table.timestamp('updated_at',{ useTz: true }).defaultTo(knex.fn.now());
 
         table.foreign('payment_id').references('id').inTable('pagamento');
 
       })
 };
 
 exports.down = function(knex) {
    return knex.schema.dropTable('fornecedor')
 };
 