exports.up = function(knex) {
    return knex.schema.createTable('material', function (table) {
         table.increments();
         table.string('code').notNullable();
         table.string('description').notNullable();
         table.string('uniMed').notNullable();
         table.float('largura');
         table.float('rendimento');
         table.integer('color_id');
         table.date('deadline');
         table.float('total');
         table.float('min');
         table.float('max');
         table.string('deadlineDescription');
         table.timestamp('created_at',{ useTz: true }).defaultTo(knex.fn.now());
         table.timestamp('updated_at',{ useTz: true }).defaultTo(knex.fn.now());

         table.foreign('color_id').references('id').inTable('cor');
 
       })
 };
 
 exports.down = function(knex) {
   return knex.schema.dropTable('material')
 };
 