/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('comments', function (table) {
    table.increments('id');
    table.integer('post_id').references('id').inTable('posts').onDelete('CASCADE').notNullable();
    table.string('texto').notNullable();
    table.timestamp('data_criacao').defaultTo(knex.fn.now()).notNullable();        
    table.string('autor').notNullable();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('comments')
};
