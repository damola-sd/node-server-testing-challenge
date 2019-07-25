
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('heroes')
    .truncate()
    .then(function() {
      return knex('heroes').insert([
        { name: 'Aragorn' },
        { name: 'Hercules' },
        { name: 'Jason Bourne' },
        { name: 'Captain America' },
      ]);
    });
};
