module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host:"localhost",
      port:3306,
      database: 'romit', 
      user: 'root',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
  },
  test: {
    client: 'pg',
    connection: {
      database: 'challenge_twitter_test',
      user: 'postgres',
      password: 'root',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
  },
}