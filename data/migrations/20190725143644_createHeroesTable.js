
exports.up = function(knex) {
    return knex.schema.createTable('heroes', table => {
        table.increments();
        table.string('name', 255).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('heroes');
};
