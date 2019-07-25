// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/heroes.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test/testing.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/test/migrations',
    },
    seeds: {
      directory: './data/test/seeds',
    },
  },
};
