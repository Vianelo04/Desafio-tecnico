/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('posts', function (table) {
    table.increments('id');
    table.string('conteudo').notNullable();
    table.timestamp('data_criacao').defaultTo(knex.fn.now()).notNullable();        
    table.string('autor').notNullable();
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('posts')
};
