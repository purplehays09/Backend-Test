
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {
          "email":"poo@dump.brown"
        },
        {
          "email":"poop@dump.brown"
        },
        {
          "email":"poopy@dump.brown"
        },
        {
          "email":"poops@dump.brown"
        },
        {
          "email":"dave@dump.brown"
        },
      ]);
    });
};
