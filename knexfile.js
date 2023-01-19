require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection:process.env.NEXT_PUBLIC_DB_URL,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'pg',
    connection:process.env.NEXT_PUBLIC_DB_URL,
    migrations: {
      directory: './db/migrations',
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'pg',
    connection:process.env.NEXT_PUBLIC_DB_URL
  },
  migrations: {
    directory: './db/migrations',
  },
};

//console.log('Hello',process.env.NEXT_PUBLIC_DB_URL)
